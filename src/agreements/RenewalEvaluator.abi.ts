//Code generated by solts. DO NOT EDIT.
import { Readable } from "stream";
interface Provider<Tx> {
    deploy(msg: Tx, callback: (err: Error, addr: Uint8Array) => void): void;
    call(msg: Tx, callback: (err: Error, exec: Uint8Array) => void): void;
    callSim(msg: Tx, callback: (err: Error, exec: Uint8Array) => void): void;
    listen(signature: string, address: string, callback: (err: Error, event: any) => void): Readable;
    payload(data: string, address?: string): Tx;
    encode(name: string, inputs: string[], ...args: any[]): string;
    decode(data: Uint8Array, outputs: string[]): any;
}
function Call<Tx, Output>(client: Provider<Tx>, addr: string, data: string, isSim: boolean, callback: (exec: Uint8Array) => Output): Promise<Output> {
    const payload = client.payload(data, addr);
    if (isSim)
        return new Promise((resolve, reject) => { client.callSim(payload, (err, exec) => { err ? reject(err) : resolve(callback(exec)); }); });
    else
        return new Promise((resolve, reject) => { client.call(payload, (err, exec) => { err ? reject(err) : resolve(callback(exec)); }); });
}
function Replace(bytecode: string, name: string, address: string): string {
    address = address + Array(40 - address.length + 1).join("0");
    const truncated = name.slice(0, 36);
    const label = "__" + truncated + Array(37 - truncated.length).join("_") + "__";
    while (bytecode.indexOf(label) >= 0)
        bytecode = bytecode.replace(label, address);
    return bytecode;
}
export module RenewalEvaluator {
    export function Deploy<Tx>(client: Provider<Tx>): Promise<string> {
        let bytecode = "608060405234801561001057600080fd5b50610550806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063867c715114610030575b600080fd5b6100a66004803603608081101561004657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100a8565b005b60008060008673ffffffffffffffffffffffffffffffffffffffff1663481ea63d876040518263ffffffff1660e01b815260040180828152602001807f61677265656d656e740000000000000000000000000000000000000000000000815250602001915050602060405180830381600087803b15801561012857600080fd5b505af115801561013c573d6000803e3d6000fd5b505050506040513d602081101561015257600080fd5b8101908080519060200190929190505050905060008173ffffffffffffffffffffffffffffffffffffffff166304fce0156040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ad57600080fd5b505afa1580156101c1573d6000803e3d6000fd5b505050506040513d60208110156101d757600080fd5b8101908080519060200190929190505050905060008090505b8273ffffffffffffffffffffffffffffffffffffffff16637f8093816040518163ffffffff1660e01b815260040160206040518083038186803b15801561023657600080fd5b505afa15801561024a573d6000803e3d6000fd5b505050506040513d602081101561026057600080fd5b81019080805190602001909291905050508110156103d4577f414e3a2f2f61677265656d656e742d72656e6577616c2d6576616c7561746f727f78f2b0d3cb3809f8d46488d25dc6052b618bd3d2f61a6215187b06a1ca381fff848573ffffffffffffffffffffffffffffffffffffffff166379ce3cb2856040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561030c57600080fd5b505afa158015610320573d6000803e3d6000fd5b505050506040513d602081101561033657600080fd5b810190808051906020019092919050505085604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182151515158152602001935050505060405180910390a280806001019150506101f0565b508773ffffffffffffffffffffffffffffffffffffffff1663d6256976887f72656e6577616c4c6f6f704261636b00000000000000000000000000000000006040518363ffffffff1660e01b81526004018083815260200182815260200192505050604080518083038186803b15801561044d57600080fd5b505afa158015610461573d6000803e3d6000fd5b505050506040513d604081101561047757600080fd5b81019080805190602001909291908051906020019092919050505080945081955050508373ffffffffffffffffffffffffffffffffffffffff16631cb3554084836040518363ffffffff1660e01b8152600401808381526020018215151515815260200192505050600060405180830381600087803b1580156104f957600080fd5b505af115801561050d573d6000803e3d6000fd5b50505050505050505050505056fea265627a7a723158209db0821702d9667c266d0e7494a27c44807e42e4d9fe00803703a9e4623663c864736f6c634300050c0032";
        const data = bytecode;
        const payload = client.payload(data);
        return new Promise((resolve, reject) => { client.deploy(payload, (err, addr) => {
            if (err)
                reject(err);
            else {
                const address = Buffer.from(addr).toString("hex").toUpperCase();
                resolve(address);
            }
        }); });
    }
    export class Contract<Tx> {
        private client: Provider<Tx>;
        public address: string;
        constructor(client: Provider<Tx>, address: string) {
            this.client = client;
            this.address = address;
        }
        LogRenewalResultNotificationTrigger(callback: (err: Error, event: any) => void): Readable { return this.client.listen("LogRenewalResultNotificationTrigger", this.address, callback); }
        complete(_piAddress: string, _activityInstanceId: Buffer) {
            const data = Encode(this.client).complete(_piAddress, _activityInstanceId);
            return Call<Tx, void>(this.client, this.address, data, false, (exec: Uint8Array) => {
                return Decode(this.client, exec).complete();
            });
        }
    }
    export const Encode = <Tx>(client: Provider<Tx>) => { return {
        complete: (_piAddress: string, _activityInstanceId: Buffer) => { return client.encode("867C7151", ["address", "bytes32"], _piAddress, _activityInstanceId); }
    }; };
    export const Decode = <Tx>(client: Provider<Tx>, data: Uint8Array) => { return {
        complete: (): void => { return; }
    }; };
}