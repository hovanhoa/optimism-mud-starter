import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { useState } from 'react';

export const App = () => {
  const {
    components: { Counter, BalanceTable, Accounts },
    singletonEntity,
    worldSend,
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);
  const balances = useComponentValue(BalanceTable, singletonEntity);
  const accounts = useComponentValue(Accounts, singletonEntity);

  const [username, setUseranme] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form id="verifyAcc">
        Username: <input type="text" value={username} onChange={(e) => setUseranme(e.target.value)}/>
        <button
          type="button"
          onClick={async (event) => {
            event.preventDefault();
            await worldSend("setUsername", [username]);
          }}
        >Update</button><br/>
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button
          type="button"
          onClick={async (event) => {
            event.preventDefault();
            await worldSend("setPassword", [password]);
          }}
          
        >Update</button><br/>
        
        <input type="button" onClick={
          async (event) => {
            event.preventDefault();
            await worldSend("verifyAccount", [username, password]);
          }
        } value="Submit"/>
      </form>
      <br/><br/><br/>

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
