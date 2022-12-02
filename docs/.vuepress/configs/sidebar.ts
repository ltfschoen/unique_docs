import {SidebarConfig} from '@vuepress/theme-default'

export const sidebar: Record<string, SidebarConfig> = {
  en: {
    '/tutorials': [
      {
        text: 'Tutorials',
        children: [
          {
            text: 'SDK guides',
            children: [
              '/tutorials/accounts/create-account.md',
              '/tutorials/create-collection-token.md',
              '/tutorials/accounts/integrate-creating-into-UI.md',
              '/tutorials/work-with-evm-via-sdk.md',
              '/tutorials/live-nft-example.md',
            ]
          },
          {
            text: 'REST API examples',
            children: [
              '/tutorials/examplesREST.md',
            ]
          },
          // '/tutorials/index.md',
          '/tutorials/createAccount.md',
          // '/tutorials/accounts/ways-to-create.md',
          '/tutorials/wallet-integration.md',
          '/tutorials/how-to-get-collections-tokens.md',
          '/tutorials/nfts-fetching.md',
          '/tutorials/getNFTsAndTokens.md',
          '/tutorials/easy-market.md',
          '/tutorials/nfts-how-to-create-and-tune-collection.md',
          '/tutorials/nfts-how-to-mint.md',
          '/tutorials/nfts-ways-to-create.md',
          '/tutorials/store-files.md',
          '/tutorials/getAccountAndBalance.md',
          '/tutorials/destroyCollection.md',
          '/tutorials/burnNFT.md',
          '/tutorials/how-to-use-nesting-and-bundling.md',
        ],
      }
    ],
    '/business': [
      {
        text: 'Business',
        children: [
          '/business/index.md',
          '/business/ecosystem/community.md',
          '/business/ecosystem/use-cases.md',
        ],
      }
    ],
    '/concepts': [
      {
        text: 'Concepts',
        children: [
          {
            text: 'Tokens & collections types',
            children: [
              '/concepts/types/nft.md',
              '/concepts/types/rft.md',
              '/concepts/types/fungible.md',
            ]
          },
          {
            text: 'Collections',
            children: [
              '/concepts/collections/collection-schemas.md',
              '/concepts/collections/collection-properties.md',
              '/concepts/collections/token-properties.md',
              '/concepts/collections/collection-permissions.md',
              '/concepts/collections/collection-limits.md',
            ]
          },
          '/concepts/addresses/index.md',
          {
            text: 'Schemas',
            children: [
              '/concepts/schemas/unique.md',
              '/concepts/schemas/ERC721Metadata.md',
            ]
          },
          '/concepts/wallet-integration.md',
          {
            text: 'Network Features',
            children: [
              '/concepts/network-features/index.md',
              '/concepts/network-features/evm.md',
              '/concepts/network-features/sponsoring.md',
              '/concepts/network-features/onchain-metadata.md',
              '/concepts/network-features/nesting-bundling.md',
              '/concepts/network-features/refungibility.md',
              '/concepts/network-features/scheduling.md',
              '/concepts/network-features/rate-limits.md',
              '/concepts/network-features/royalties.md',
              '/concepts/network-features/did.md',
            ]
          },
          '/concepts/glossary.md',
        ],
      },
    ],
    '/evm': [
      {
        text: 'EVM docs',
        children: [
          '/evm/index.md',
          '/evm/Smart contracts.md',
          '/evm/UniqueNFT.md',
        ],
      }
    ],
    '/networks': [
      {
        text: 'Networks',
        children: [
          '/networks/index.md',
          '/networks/rpc.md',
          '/networks/extrinsics.md',
          '/networks/events.md',
          '/networks/governance-only.md',
          '/networks/nesting.md',
          {
            text: 'Ecosystem',
            children: [
              '/networks/ecosystem/substrate.md',
              '/networks/ecosystem/polkadot.md',
            ]
          },
        ],
      }
    ],
    '/sdk': [
      {
        text: 'SDK docs',
        children: [
          '/sdk/index.md',
          '/sdk/architecture.md',
          '/sdk/installation.md',
          '/sdk/methods.md',
          '/sdk/tools.md',
        ],
      }
    ]
  }
}
