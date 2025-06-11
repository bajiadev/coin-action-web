import { Widget } from "@rango-dev/widget-embedded";

const Rango = () => {
  return (
    <div className="flex items-center justify-center">
      <Widget
        config={{
          apiKey: "b394182b-1b5c-4d07-80c5-cea5b8eb4ffe",
          walletConnectProjectId: "a13312f062af555c7367af5d28d6e52a",
          title: "Coin Action", 
          affiliate: {
            ref: 'r5XnoD',
            // Setting 0.1 means 0.1% of input amount
            percent: 0.2,
            // If you want to change the default wallet that you want to earn reward,  
            // you could pass your desired wallets in this property 
            // wallets: {
            //   'ETH': '0xb76f8189604b59463de5bcbe7981f4f23934fcef',  // 
            //   'BSC': '0xb76f8189604b59463de5bcbe7981f4f23934fcef',
            //   'POLYGON': '0xb76f8189604b59463de5bcbe7981f4f23934fcef',
            //   // ...
            // }
          },
          from: {
            blockchains: [
                'BTC',
                'ETH',
                'BSC',
                'ARBITRUM',
                'POLYGON',
                'ZKSYNC',
                'STARKNET',
                'OPTIMISM',
                'AVAX_CCHAIN',
                'POLYGONZK',
                'BASE',
                'LINEA',
                'MODE',
                'TON',
                'TRON',
                'SCROLL',
                'BLAST',
                'COSMOS',
                'OSMOSIS',
                'NEUTRON',
                'NOBLE',
                'DYDX',
                'SOLANA',
                'CRONOS',
                'FANTOM',
                'AURORA',
                'MAYA',
                'THOR',
                'BOBA',
                'MOONBEAM',
                'MOONRIVER',
                'OKC',
                'LTC',
                'BCH',
                'METIS',
                'STARGAZE',
                'CRYPTO_ORG',
                'CHIHUAHUA',
                'BANDCHAIN',
                'COMDEX',
                'REGEN',
                'IRIS',
                'EMONEY',
                'JUNO',
                'STRIDE',
                'MARS',
                'TERRA',
                'BITSONG',
                'AKASH',
                'KI',
                'PERSISTENCE',
                'KUJIRA',
                'SENTINEL',
                'INJECTIVE',
                'SECRET',
                'KONSTELLATION',
                'STARNAME',
                'BITCANNA',
                'UMEE',
                'DESMOS',
                'LUMNETWORK',
                'CELO',
                'DASH',
                'SHIMMER',
                'XLAYER',
                'TAIKO',
                'DOGE',
                'ZORA'
            ],
            blockchain: 'ETH',
            token: {
                blockchain: 'ETH',
                address: null,
                symbol: 'ETH'
            }
        },
        theme: {
          mode: 'dark',
          colors: {
              dark: {
                  secondary800: '#242D5B',
                  secondary850: '#131C49',
                  neutral: '#161C38',
                  neutral100: '#101327',
                  neutral200: '#0D122C',
                  neutral300: '#0F142E',
                  neutral400: '#111733',
                  neutral500: '#161C38',
                  neutral800: '#B8B8B8',
                  neutral900: '#E9E9E9',
                  background: '#2a1f4e'
              }
          },
          singleTheme: true
      },
         
        }}
      />
    </div>
  );
}

export default Rango;

