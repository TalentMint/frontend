import { useConnectWallet, useCurrentAccount, useWallets } from '@mysten/dapp-kit';
import { isEnokiWallet } from '@mysten/enoki';
import { type EnokiWallet } from '@mysten/enoki';
import { type AuthProvider } from '@mysten/enoki';
 
export const ZKLoginButton = () => {
	const currentAccount = useCurrentAccount();
	const { connect } = useConnectWallet();
 
	const wallets = useWallets().filter(isEnokiWallet);
	const walletsByProvider = wallets.reduce(
		(map, wallet) => map.set(wallet.provider, wallet),
		new Map<AuthProvider, EnokiWallet>(),
	);
 
	const googleWallet = walletsByProvider.get('google');
	const facebookWallet = walletsByProvider.get('facebook');
 
	if (currentAccount) {
		return <div>Current address: {currentAccount.address}</div>;
	}
 
	return (
		<>
			{googleWallet ? (
				<button
					onClick={() => {
						connect({ wallet: googleWallet });
					}}
				>
					Sign in with Google
				</button>
			) : null}
			{facebookWallet ? (
				<button
					onClick={() => {
						connect({ wallet: facebookWallet });
					}}
				>
					Sign in with Facebook
				</button>
			) : null}
		</>
	);
}