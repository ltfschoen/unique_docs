import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: Record<string, SidebarConfig> = {
  en: {
    '/about': [
      {
        text: 'Intro',
        children: [
          '/about',
        ],
      },
      {
        text: 'Features',
        children: [
          {
            text: 'Tokens & collections types',
            link: '/about/types/nft.md',
            collapsible: true,
            children: [
              '/about/types/nft.md',
              '/about/types/rft.md',
              '/about/types/fungible.md',
            ],
          },
          {
            text: 'NFT formats',
            link: '/about/nft-formats/native-nfts.md',
            collapsible: true,
            children: [
              '/about/nft-formats/native-nfts.md',
              '/about/nft-formats/customizable-nfts.md',
              '/about/nft-formats/multi-resource-nfts.md',
              '/about/nft-formats/dynamic-nfts.md',
              '/about/nft-formats/fractional-tokens.md',
              '/about/nft-formats/nested-nfts.md',
            ],
          },
          '/about/network-features/evm.md',
          '/about/network-features/sponsoring.md',
          '/about/network-features/nesting-bundling.md',
          '/about/network-features/live-nft.md',
          '/about/network-features/staking.md',
          '/about/network-features/pricing.md',
        ]
      },
      {
        text: 'Tech Concepts',
        children: [
          '/about/addresses',
          '/about/balances/index.md',
          '/about/glossary.md',
          '/about/limitations/limitations.md'
        ]
      }
    ],
    '/build': [
      {
        text: 'Intro',
        children: [
          '/build',
        ]
      },
      {
        text: 'SDK',
        children: [
            '/build/sdk/getting-started.md',
            '/build/sdk/accounts.md',
            '/build/sdk/collections.md',
            '/build/sdk/tokens.md',
            '/build/sdk/examples-nesting.md',
        ]
      },
      {
        text: 'EVM',
        children: [
          '/build/evm',
          '/build/evm/smart_contracts.md',
          '/build/evm/UniqueNFT.md'
        ],
      }
    ],
    '/tutorials': [
      {
        text: 'Intro',
        children: [
          '/tutorials'
        ]
      },
      {
        text: 'SDK guides',
        children: [
          '/tutorials/work-with-accounts.md',
          // '/tutorials/accounts/create-account.md', - how-to-accounts.md
          // '/tutorials/getAccountAndBalance.md', - how-to-accounts.md
          // '/tutorials/create-collection-token.md', - exists in how-to-collections.md + how-to-tokens.md
          // '/tutorials/accounts/integrate-creating-into-UI.md', - how-to-accounts.md
          '/tutorials/nfts-how-to-create-and-tune-collection.md',
          '/tutorials/nfts-how-to-mint.md',
          // '/tutorials/store-files.md',  - duplicate
          // '/tutorials/nfts-ways-to-create.md', - duplicate
          // '/tutorials/destroyCollection.md', - how-to-collections.md
          // '/tutorials/burnNFT.md', - how-to-tokens.md
          '/tutorials/work-with-evm-via-sdk.md',
          // '/tutorials/live-nft-example.md', -> moved to SDK life nft
          '/tutorials/websocket-subscriptions.md',
        ]
      },
      {
        text: 'Minting guides',
        children: [
          '/tutorials/minting/main.md',
          '/tutorials/minting/setup-environment.md',
          '/tutorials/minting/prepare-scripts.md',
          '/tutorials/minting/prepare-account.md',
          '/tutorials/minting/generative-nft.md',
          '/tutorials/minting/mass-minting.md',
          '/tutorials/minting/customizable-nfts.md',
          '/tutorials/minting/mass-listing.md'
        ]
      },
      {
        text: 'EVM',
        children: [
          '/tutorials/evm/eth-general.md',
          '/tutorials/evm/using-contracts.md',
          '/tutorials/evm/using-sol-interfaces.md',
          '/tutorials/evm/ready-samples.md',
          // '/tutorials/evm/how-to-ethereum.md', - disassembled
        ],
      },
      {
        text: 'REST API',
        children: [
          '/tutorials/examplesREST.md',
        ]
      },
      {
        text: 'GraphQL',
        children: [
          '/tutorials/graph-node-docker.md',
          '/tutorials/subquery-indexer.md',
          '/tutorials/wallet-integration.md',
          '/tutorials/how-to-get-collections-tokens.md',
          '/tutorials/nfts-fetching.md',
        ],
      },
      {
        text: 'How to',
        children: [
          // '/tutorials/createAccount.md', - how-to-accounts.md
          '/tutorials/getNFTsAndTokens.md',
          '/tutorials/easy-market.md',
          // '/tutorials/how-to-use-nesting-and-bundling.md', -> moved to SDK nesting
        ]
      },
      {
        text: 'User guides',
        children: [
          {
            text: 'Choose your wallet',
            link: '/tutorials/user-guides/wallets.md',
            children: [
              '/tutorials/user-guides/polkadotjs.md',
              '/tutorials/user-guides/ledger-connect.md'
            ]
          },
        ]
      }
    ],
    '/reference': [
      {
        text: 'Blockchains',
        children: [
          '/reference',
        ]
      },
      {
        text: "SDK",
        children: [
          '/reference/sdk-endpoints.md',
          '/reference/sdk-methods.md'
        ]
      },
      {
        text: 'EVM',
        children: [
          '/reference/tools.md'
        ]
      },
      {
        text: 'Blockchain API',
        children: [
          '/reference/blockchain/collections.md',
          '/reference/blockchain/properties.md',
          '/reference/blockchain/nesting.md',
          '/reference/blockchain/owner-admin-roles.md',
          '/reference/blockchain/rpc.md',
          '/reference/blockchain/extrinsics.md',
          '/reference/blockchain/events.md',        ],
      },
    ],
  },
}
