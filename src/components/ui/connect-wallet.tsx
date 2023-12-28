import { ConnectButton, WalletButton } from '@rainbow-me/rainbowkit';
import CustomButton from './button/custom-button';

const currentChain = ['rainbow', 'metamask', 'coinbase'];

export default function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <CustomButton
                    style="connect"
                    handlerClick={openConnectModal}
                    title="Connect Wallet"
                  />
                );
              }

              if (chain.unsupported) {
                return (
                  <CustomButton
                    style="connect"
                    handlerClick={openChainModal}
                    title="Wrong network"
                  />
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <button
                    className="rounded-lg bg-cyan-100 p-2 px-5 font-extrabold text-cyan-900 "
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                    
                  </button> */}

                  {/* {currentChain.map((item) => (
                    <div>
                      {item}
                      <WalletButton wallet={item} />
                    </div>
                  ))} */}

                  <button
                    className="mt-1.5 rounded-lg bg-cyan-100 p-2 px-5 font-extrabold text-cyan-900"
                    onClick={openAccountModal}
                    type="button"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                  {/* <CustomButton
                    style="rounded-lg bg-cyan-100 p-2 px-5 font-extrabold text-cyan-900"
                    handlerClick={openAccountModal}
                    title={
                      account.displayName + ' ' + `(${account.displayBalance})`
                    }
                  /> */}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
