import { useEffect, useState } from "react";
import { Card, CardContent, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { SwapVert } from "@mui/icons-material";
import { useForm, Controller } from 'react-hook-form';
import { getRate } from "./getRate";


const chains = ["Ethereum", "BSC", "Polygon", "Solana"];
const tokens = {
  Ethereum: ["ETH", "USDC", "DAI"],
  BSC: ["BNB", "BUSD", "USDT"],
  Polygon: ["MATIC", "USDC", "DAI"],
  Solana: ["SOL", "USDC", "USDT"],
};

export default function Exchange() {
  const [sendChain, setSendChain] = useState("Ethereum");
  const [sendToken, setSendToken] = useState("ETH");
  const [sendAmount, setSendAmount] = useState("");
  const [receiveChain, setReceiveChain] = useState("BSC");
  const [receiveToken, setReceiveToken] = useState("BNB");
  const [receiveAmount, setReceiveAmount] = useState("0");

  const { handleSubmit, control } = useForm();

  const handleExchangeRate = () => {
    setReceiveAmount((parseFloat(sendAmount) * 0.95).toFixed(4)); // Example conversion with 5% fee
  };

  const handleSwap = () => {
    setSendChain(receiveChain);
    setReceiveChain(sendChain);
    setSendToken(receiveToken);
    setReceiveToken(sendToken);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    handleExchangeRate(data);
  };



  useEffect(() => {
  const rate = getRate();
  console.log(rate);
  setReceiveAmount(rate);
  },[]);
 

  return (
    <Card className="max-w-md mx-auto p-6 shadow-lg rounded-xl bg-white">
      <CardContent>
        <h2 className="text-center text-xl font-semibold mb-4">Exchange</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Send Section */}
          <div className="flex gap-4 mb-2">
            <FormControl className="w-1/2">
              <InputLabel>From Chain</InputLabel>
              <Controller
                name="sendChain"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select {...field} className="bg-white">
                    {chains.map((chain) => (
                      <MenuItem key={chain} value={chain}>
                        {chain}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>

            <FormControl className="w-1/2">
              <InputLabel>Token</InputLabel>
              <Controller
                name="sendToken"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select {...field} className="bg-white">
                    {tokens[sendChain]?.map((token) => (
                      <MenuItem key={token} value={token}>
                        {token}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </div>

          <Controller
            name="sendAmount"
            control={control}
            rules={{ required: "Amount is required" }}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Amount" type="number" className="mb-4" />
            )}
          />

          {/* Swap Button */}
          <div className="flex justify-center my-2">
            <Button variant="outlined" onClick={handleSwap} className="min-w-[48px] h-[48px]">
              <SwapVert />
            </Button>
          </div>

          {/* Receive Section */}
          <div className="flex gap-4 mb-2">
            <FormControl className="w-1/2">
              <InputLabel>To Chain</InputLabel>
              <Controller
                name="receiveChain"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select {...field} className="bg-white">
                    {chains.map((chain) => (
                      <MenuItem key={chain} value={chain}>
                        {chain}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>

            <FormControl className="w-1/2">
              <InputLabel>Token</InputLabel>
              <Controller
                name="receiveToken"
                control={control}
                rules={{ required: "Required" }}
                render={({ field }) => (
                  <Select {...field} className="bg-white">
                    {tokens[receiveChain]?.map((token) => (
                      <MenuItem key={token} value={token}>
                        {token}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </div>

          <Controller
            name="receiveAmount"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Receive Amount" InputProps={{ readOnly: true }} className="mb-4 bg-gray-100" />
            )}
          />

          <Controller
            name="receiveAddress"
            control={control}
            rules={{ required: "Receive Address is required" }}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Receive Address" className="mb-4 bg-gray-100" />
            )}
          />

          <Button type="submit" variant="contained" fullWidth className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">
            Exchange
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
