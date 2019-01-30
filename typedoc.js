module.exports = {
  out: './docs',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  exclude: [
    './lib/CnUtils.ts',
    './lib/Constants.ts',
    './lib/JsonSerialization.ts',
    './lib/Metronome.ts',
    './lib/OpenWallet.ts',
    './lib/SubWallets.ts',
    './lib/SubWallet.ts',
    './lib/SynchronizationStatus.ts',
    './lib/Types.ts',
    './lib/WalletSynchronizer.ts',
    './lib/index.ts',
    './lib/Transfer.ts',
  ],
  mode: 'modules'
}
