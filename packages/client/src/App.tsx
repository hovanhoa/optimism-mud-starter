import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    components: { Counter, BalanceTable },
    singletonEntity,
    worldSend,
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);
  const balances = useComponentValue(BalanceTable, singletonEntity);

  return (
    <>
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
        <br></br>
        Factory Counter: <span>{counter?.factoryValue ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();

          const tx = await worldSend("increment", []);

          console.log("increment tx", tx);
          console.log("increment result", await tx.wait());
        }}
      >
        Increment
      </button>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <span>{balances?.value}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          await worldSend("mint", [1]);
        }}
      >
        Mint
      </button>
    </>
  );
};
