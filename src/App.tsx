import {
  ConnectType,
  useConnectedWallet,
  useWallet,
  WalletStatus,
} from '@terra-dev/use-wallet';
import { Coins, LCDClient } from '@terra-money/terra.js';

import axios from 'axios';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import './App.css';

interface Token {
  symbol: string;
  icon?: string;
  token: string;
  decimals?: number;
}

function App() {
  const wallet = useWallet();
  console.log('wallet', wallet);
  const connected = useConnectedWallet();
  console.log('connected', connected);
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
  const hello = useQuery(
    'asdfsf',
    () =>
      lcd.wasm.contractQuery<{ balance: string }>(
        'terra1cfctm2y43vn7f4j8h389hp6tntcmkpe290w8up',
        { balance: { address: connected?.terraAddress } }
      ),
    {
      enabled: !!connected?.terraAddress,
    }
  );
  console.log('hello', hello.data);
  // const coins = useQuery('bank-total', () => lcd.bank.total());
  const balance2 = useQuery(
    'bblance',
    () => lcd.bank.balance(connected?.terraAddress as string),
    { enabled: !!connected?.terraAddress }
  );

  console.log('balance2', balance2);
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
            wallet.connect(ConnectType.CHROME_EXTENSION);
          }}
        >
          terra extension connect
        </button>
      )}
    </div>
  );
}

export default App;
