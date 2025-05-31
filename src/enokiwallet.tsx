import { useSuiClientContext } from '@mysten/dapp-kit';
import { isEnokiNetwork, registerEnokiWallets } from '@mysten/enoki';
import { useEffect } from 'react';
// const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });

export const RegisterEnokiWallets = () => {
	const { client, network } = useSuiClientContext();
 
	useEffect(() => {
		if (!isEnokiNetwork(network)) return;
 
		const { unregister } = registerEnokiWallets({
			apiKey: 'YOUR_PUBLIC_ENOKI_API_KEY',
			providers: {
				// Provide the client IDs for each of the auth providers you want to use:
				google: {
					clientId: 'YOUR_GOOGLE_CLIENT_ID',
				},
				facebook: {
					clientId: 'YOUR_FACEBOOK_CLIENT_ID',
				},
			},
			client,
			network,
		});
 
		return unregister;
	}, [client, network]);
 
	return null;
}
