import {
  ConnectType,
  useConnectedWallet,
  useWallet,
  WalletStatus,
} from '@terra-money/wallet-provider';
import { Coin, Coins, LCDClient, MsgTransfer } from '@terra-money/terra.js';

import axios from 'axios';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import { useGasPrice } from './hooks/useGasPrices';

interface Token {
  symbol: string;
  icon?: string;
  token: string;
  decimals?: number;
}

function App() {
  const wallet = useWallet();
  // console.log('wallet', wallet);
  const connected = useConnectedWallet();
  const gasPrices = useGasPrice('uusd');
  // console.log('gasPrices', gasPrices);
  // console.log('connected', connected);
  const lcd = useMemo(() => {
    return new LCDClient({
      chainID: wallet.network.chainID,
      URL: wallet.network.lcd,
    });
  }, [wallet?.network?.chainID]);

  // values.map(({ token }) => ({
  //   queryKey: ['cw20TokenBalance', token],
  //   queryFn: async () => {
  //     const { balance } = await lcd.wasm.contractQuery<{ balance: string }>(
  //       token,
  //       { balance: { address } }
  //     )

  //     return balance
  //   },
  // }))
  // const tokenBalance = useQuery(
  //   'asdfsf',
  //   () =>
  //     lcd.wasm.contractQuery<{ balance: string }>(
  //       'terra1cfctm2y43vn7f4j8h389hp6tntcmkpe290w8up',
  //       { balance: { address: connected?.terraAddress } }
  //     ),
  //   {
  //     enabled: !!connected?.terraAddress,
  //   }
  // );
  // console.log('tokenBalance', tokenBalance.data);
  // const coins = useQuery('bank-total', () => lcd.bank.total());
  // const coinsBalance = useQuery(
  //   'bblance',
  //   () => lcd.bank.balance(connected?.terraAddress as string),
  //   { enabled: !!connected?.terraAddress }
  // );

  // console.log('coinsBalance', coinsBalance.data);
  // const tokens = useQuery('tokens', () =>
  //   axios.get('https://assets.terra.money/cw20/tokens.json')
  // );
  // if (coins.isLoading) return <div>loading...</div>;

  // console.log('coins', coins.data?.toData());
  // console.log('balance', balance);
  // console.log('tokens', tokens);
  // useEffect(() => {}, [lcd.config.chainID]);
  // console.log('lcd', lcd);
  return (
    <div>
      <h1>terra-playground</h1>
      {connected ? (
        <button
          onClick={() => {
            wallet.disconnect();
          }}
        >
          disconnect
        </button>
      ) : (
        <button
          onClick={() => {
            wallet.connect(ConnectType.EXTENSION);
          }}
        >
          terra extension connect
        </button>
      )}
      {/* {tokenBalance.data && (
        <>
          <h2>Your YES COIN balance</h2>
          <p>{tokenBalance.data?.balance} YESS</p>
        </>
      )} */}
      {connected && (
        <button
          onClick={async () => {
            // new MsgTransfer
            try {
              const msgs = [
                new MsgTransfer(
                  'transfer', // source port
                  'channel-1', // source channel
                  new Coin('uluna', 1000), // amount to transfer
                  'terra1gy9glccn7jwcj6vafauxe5kkd2pu5xgmvsajh8', // sender
                  'osmo1s7kvwftqg38vsn7ccqqupwlw0nyjnhh3darnc7', // recipient
                  undefined, // timeout_height
                  (Date.now() + 60 * 1000) * 1e6 // timeout_timestamp
                ),
              ];
              const memo = 'test from victor';
              const txOptions = { msgs, memo, gasPrices };
              const response = await wallet.post(txOptions);
              console.log('response', response);
            } catch (error) {
              console.log('error', error);
            }
            // console.log(response)
            // const msgs = [new MsgSend(address, address, `1uluna`)]
            // const memo = "Test"
            // const txOptions = { msgs, memo, gasPrices }
            // const response = await post(txOptions)
            // console.log(response)
            // wallet.post;
          }}
        >
          terra to osmosis
        </button>
      )}
    </div>
  );
}

export default App;
