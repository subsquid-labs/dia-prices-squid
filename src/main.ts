import { TypeormDatabase } from "@subsquid/typeorm-store";
import { PriceData } from "./model";
import { processor } from "./processor";
import * as diaOracle from "./abi/diaOracleABI";
processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  const priceDataArray: PriceData[] = [];
  for (let c of ctx.blocks) {
    for (let tx of c.transactions) {
      // decode and normalize the tx data
      let decodedInput = diaOracle.functions.setValue.decode(tx.input);
      let priceData = new PriceData({
        id: tx.hash,
        block: c.header.height,
        txHash: tx.hash,
        key: decodedInput.key,
        value: decodedInput.value,
        timestamp: decodedInput.timestamp,
      });
      priceDataArray.push(priceData);
    }
  }
  await ctx.store.insert(priceDataArray);
});
