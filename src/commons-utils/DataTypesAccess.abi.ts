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
export module DataTypesAccess {
    export function Deploy<Tx>(client: Provider<Tx>): Promise<string> {
        let bytecode = "60806040523480156200001157600080fd5b507f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200006962002edd60201b620000bf1760201c565b604051808260ff16815260200180602001828103825260078152602001807f426f6f6c65616e000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200011162002ee660201b620000c81760201c565b604051808260ff16815260200180602001828103825260068152602001807f537472696e6700000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620001b962002eef60201b620000d11760201c565b604051808260ff16815260200180602001828103825260108152602001807f556e7369676e656420496e7465676572000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200026162002f0660201b620000e01760201c565b604051808260ff16815260200180602001828103825260168152602001807f382d62697420556e7369676e656420496e7465676572000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200030962002f0f60201b620000e91760201c565b604051808260ff16815260200180602001828103825260178152602001807f31362d62697420556e7369676e656420496e74656765720000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620003b162002f1860201b620000f21760201c565b604051808260ff16815260200180602001828103825260178152602001807f33322d62697420556e7369676e656420496e74656765720000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200045962002f2160201b620000fb1760201c565b604051808260ff16815260200180602001828103825260178152602001807f36342d62697420556e7369676e656420496e74656765720000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200050162002f2a60201b620001041760201c565b604051808260ff16815260200180602001828103825260188152602001807f3132382d62697420556e7369676e656420496e746567657200000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620005a962002f3360201b6200010d1760201c565b604051808260ff16815260200180602001828103825260188152602001807f3235362d62697420556e7369676e656420496e746567657200000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200065162002f3c60201b620001161760201c565b604051808260ff168152602001806020018281038252600e8152602001807f5369676e656420496e74656765720000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620006f962002f5360201b620001251760201c565b604051808260ff16815260200180602001828103825260148152602001807f382d626974205369676e656420496e74656765720000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620007a162002f5c60201b6200012e1760201c565b604051808260ff16815260200180602001828103825260158152602001807f31362d626974205369676e656420496e746567657200000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200084962002f6560201b620001371760201c565b604051808260ff16815260200180602001828103825260158152602001807f33322d626974205369676e656420496e746567657200000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620008f162002f6e60201b620001401760201c565b604051808260ff16815260200180602001828103825260158152602001807f36342d626974205369676e656420496e746567657200000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200099962002f7760201b620001491760201c565b604051808260ff16815260200180602001828103825260168152602001807f3132382d626974205369676e656420496e7465676572000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000a4162002f8060201b620001521760201c565b604051808260ff16815260200180602001828103825260168152602001807f3235362d626974205369676e656420496e7465676572000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000ae962002f8960201b6200015b1760201c565b604051808260ff16815260200180602001828103825260078152602001807f41646472657373000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000b9162002f9260201b620001641760201c565b604051808260ff16815260200180602001828103825260048152602001807f42797465000000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000c3962002fa960201b620001731760201c565b604051808260ff16815260200180602001828103825260068152602001807f31204279746500000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000ce162002fb260201b6200017c1760201c565b604051808260ff16815260200180602001828103825260078152602001807f32204279746573000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000d8962002fbb60201b620001851760201c565b604051808260ff16815260200180602001828103825260078152602001807f33204279746573000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000e3162002fc460201b6200018e1760201c565b604051808260ff16815260200180602001828103825260078152602001807f34204279746573000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000ed962002fcd60201b620001971760201c565b604051808260ff16815260200180602001828103825260078152602001807f38204279746573000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62000f8162002fd660201b620001a01760201c565b604051808260ff16815260200180602001828103825260088152602001807f31362042797465730000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200102962002fdf60201b620001a91760201c565b604051808260ff16815260200180602001828103825260088152602001807f32302042797465730000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620010d162002fe860201b620001b21760201c565b604051808260ff16815260200180602001828103825260088152602001807f32342042797465730000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200117962002ff160201b620001bb1760201c565b604051808260ff16815260200180602001828103825260088152602001807f32382042797465730000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200122162002ffa60201b620001c41760201c565b604051808260ff16815260200180602001828103825260088152602001807f33322042797465730000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620012c96200300360201b620001cd1760201c565b604051808260ff16815260200180602001828103825260058152602001807f42797465730000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620013716200300c60201b620001d61760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f6620426f6f6c65616e730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620014196200301560201b620001df1760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f6620537472696e6773000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620014c16200301e60201b620001e81760201c565b604051808260ff168152602001806020018281038252601a8152602001807f4172726179206f6620556e7369676e656420496e7465676572730000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620015696200303560201b620001f71760201c565b604051808260ff16815260200180602001828103825260208152602001807f4172726179206f6620382d62697420556e7369676e656420496e7465676572738152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620016116200303e60201b620002001760201c565b604051808260ff1681526020018060200182810382526021815260200180620034f3602191396040019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200169d6200304760201b620002091760201c565b604051808260ff1681526020018060200182810382526021815260200180620034b1602191396040019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620017296200305060201b620002121760201c565b604051808260ff1681526020018060200182810382526021815260200180620034d2602191396040019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620017b56200305960201b6200021b1760201c565b604051808260ff16815260200180602001828103825260228152602001806200348f602291396040019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620018416200306260201b620002241760201c565b604051808260ff16815260200180602001828103825260228152602001806200346d602291396040019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620018cd6200306b60201b6200022d1760201c565b604051808260ff16815260200180602001828103825260188152602001807f4172726179206f66205369676e656420496e74656765727300000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620019756200308260201b6200023c1760201c565b604051808260ff168152602001806020018281038252601e8152602001807f4172726179206f6620382d626974205369676e656420496e74656765727300008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001a1d6200308b60201b620002451760201c565b604051808260ff168152602001806020018281038252601f8152602001807f4172726179206f662031362d626974205369676e656420496e746567657273008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001ac56200309460201b6200024e1760201c565b604051808260ff168152602001806020018281038252601f8152602001807f4172726179206f662033322d626974205369676e656420496e746567657273008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001b6d6200309d60201b620002571760201c565b604051808260ff168152602001806020018281038252601f8152602001807f4172726179206f662036342d626974205369676e656420496e746567657273008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001c15620030a660201b620002601760201c565b604051808260ff16815260200180602001828103825260208152602001807f4172726179206f66203132382d626974205369676e656420496e7465676572738152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001cbd620030af60201b620002691760201c565b604051808260ff16815260200180602001828103825260208152602001807f4172726179206f66203235362d626974205369676e656420496e7465676572738152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001d65620030b860201b620002721760201c565b604051808260ff16815260200180602001828103825260128152602001807f4172726179206f662041646472657373657300000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001e0d620030c160201b6200027b1760201c565b604051808260ff16815260200180602001828103825260158152602001807f4172726179206f662073696e676c6520427974657300000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001eb5620030d860201b6200028a1760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f662031204279746573000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62001f5d620030e160201b620002931760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f662032204279746573000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62002005620030ea60201b6200029c1760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f662033204279746573000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620020ad620030f360201b620002a51760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f662034204279746573000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e62002155620030fc60201b620002ae1760201c565b604051808260ff16815260200180602001828103825260108152602001807f4172726179206f662038204279746573000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620021fd6200310560201b620002b71760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f662031362042797465730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620022a56200310e60201b620002c01760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f662032302042797465730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200234d6200311760201b620002c91760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f662032342042797465730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620023f56200312060201b620002d21760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f662032382042797465730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e6200249d6200312960201b620002db1760201c565b604051808260ff16815260200180602001828103825260118152602001807f4172726179206f662033322042797465730000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f646174612d747970657300000000000000000000000000000000007f55ee4d8b7cf0b2439bb494d4c61f51a1f72ba29e1806c262bf6c14155727e06e620025456200313260201b620002e41760201c565b604051808260ff168152602001806020018281038252600e8152602001807f4172726179206f662042797465730000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6000600e811115620025e657fe5b6040518082815260200180602001828103825260078152602001807f426f6f6c65616e000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6001600e8111156200268457fe5b6040518082815260200180602001828103825260068152602001807f537472696e6700000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6002600e8111156200272257fe5b6040518082815260200180602001828103825260068152602001807f4e756d62657200000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6003600e811115620027c057fe5b6040518082815260200180602001828103825260048152602001807f44617465000000000000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6004600e8111156200285e57fe5b6040518082815260200180602001828103825260088152602001807f4461746574696d650000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6005600e811115620028fc57fe5b60405180828152602001806020018281038252600f8152602001807f4d6f6e657461727920416d6f756e7400000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6006600e8111156200299a57fe5b6040518082815260200180602001828103825260118152602001807f557365722f4f7267616e697a6174696f6e0000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6007600e81111562002a3857fe5b6040518082815260200180602001828103825260108152602001807f436f6e74726163742041646472657373000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6008600e81111562002ad657fe5b60405180828152602001806020018281038252600d8152602001807f5369676e696e67205061727479000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c6009600e81111562002b7457fe5b60405180828152602001806020018281038252600d8152602001807f33322d427974652056616c7565000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c600a600e81111562002c1257fe5b6040518082815260200180602001828103825260088152602001807f446f63756d656e740000000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c600b600e81111562002cb057fe5b60405180828152602001806020018281038252600a8152602001807f4c617267652054657874000000000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c600c600e81111562002d4e57fe5b60405180828152602001806020018281038252600f8152602001807f506f736974697665204e756d62657200000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c600d600e81111562002dec57fe5b60405180828152602001806020018281038252600d8152602001807f54696d65204475726174696f6e000000000000000000000000000000000000008152506020019250505060405180910390a27f414e3a2f2f706172616d657465722d74797065730000000000000000000000007ff0bf6e7f9a7e9e02acd2abfea94b609921a72b8853c18cc97c180a9c836fce7c600e8081111562002e8957fe5b60405180828152602001806020018281038252600a8152602001807f54696d65204379636c65000000000000000000000000000000000000000000008152506020019250505060405180910390a26200313b565b60006001905090565b60006002905090565b600062002f0162002f3360201b60201c565b905090565b60006003905090565b60006004905090565b60006005905090565b60006006905090565b60006007905090565b60006008905090565b600062002f4e62002f8060201b60201c565b905090565b6000600d905090565b6000600e905090565b6000600f905090565b60006010905090565b60006011905090565b60006012905090565b60006028905090565b600062002fa462002fa960201b60201c565b905090565b60006032905090565b60006033905090565b60006034905090565b60006035905090565b60006036905090565b60006037905090565b60006038905090565b60006039905090565b6000603a905090565b6000603b905090565b6000603c905090565b60006065905090565b60006066905090565b6000620030306200306260201b60201c565b905090565b60006067905090565b60006068905090565b60006069905090565b6000606a905090565b6000606b905090565b6000606c905090565b60006200307d620030af60201b60201c565b905090565b60006071905090565b60006072905090565b60006073905090565b60006074905090565b60006075905090565b60006076905090565b6000608c905090565b6000620030d3620030d860201b60201c565b905090565b60006096905090565b60006097905090565b60006098905090565b60006099905090565b6000609a905090565b6000609b905090565b6000609c905090565b6000609d905090565b6000609e905090565b6000609f905090565b600060a0905090565b610322806200314b6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063abf8713c1461003b578063c3388f2714610059575b600080fd5b610043610077565b6040518082815260200191505060405180910390f35b61006161009b565b6040518082815260200191505060405180910390f35b7f414e3a2f2f646174612d7479706573000000000000000000000000000000000081565b7f414e3a2f2f706172616d657465722d747970657300000000000000000000000081565b60006001905090565b60006002905090565b60006100db61010d565b905090565b60006003905090565b60006004905090565b60006005905090565b60006006905090565b60006007905090565b60006008905090565b6000610120610152565b905090565b6000600d905090565b6000600e905090565b6000600f905090565b60006010905090565b60006011905090565b60006012905090565b60006028905090565b600061016e610173565b905090565b60006032905090565b60006033905090565b60006034905090565b60006035905090565b60006036905090565b60006037905090565b60006038905090565b60006039905090565b6000603a905090565b6000603b905090565b6000603c905090565b60006065905090565b60006066905090565b60006101f2610224565b905090565b60006067905090565b60006068905090565b60006069905090565b6000606a905090565b6000606b905090565b6000606c905090565b6000610237610269565b905090565b60006071905090565b60006072905090565b60006073905090565b60006074905090565b60006075905090565b60006076905090565b6000608c905090565b600061028561028a565b905090565b60006096905090565b60006097905090565b60006098905090565b60006099905090565b6000609a905090565b6000609b905090565b6000609c905090565b6000609d905090565b6000609e905090565b6000609f905090565b600060a090509056fea265627a7a723158207becf3a30f8dff35bf4a374b0aa8e296594ff7cf37c2f16c9101d35f5d1b6d3764736f6c634300050c00324172726179206f66203235362d62697420556e7369676e656420496e7465676572734172726179206f66203132382d62697420556e7369676e656420496e7465676572734172726179206f662033322d62697420556e7369676e656420496e7465676572734172726179206f662036342d62697420556e7369676e656420496e7465676572734172726179206f662031362d62697420556e7369676e656420496e746567657273";
        const data = bytecode + client.encode("", []);
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
        LogDataType(callback: (err: Error, event: any) => void): Readable { return this.client.listen("LogDataType", this.address, callback); }
        LogParameterType(callback: (err: Error, event: any) => void): Readable { return this.client.listen("LogParameterType", this.address, callback); }
        EVENT_ID_DATA_TYPES() {
            const data = Encode(this.client).EVENT_ID_DATA_TYPES();
            return Call<Tx, [Buffer]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).EVENT_ID_DATA_TYPES();
            });
        }
        EVENT_ID_PARAMETER_TYPES() {
            const data = Encode(this.client).EVENT_ID_PARAMETER_TYPES();
            return Call<Tx, [Buffer]>(this.client, this.address, data, true, (exec: Uint8Array) => {
                return Decode(this.client, exec).EVENT_ID_PARAMETER_TYPES();
            });
        }
    }
    export const Encode = <Tx>(client: Provider<Tx>) => { return {
        EVENT_ID_DATA_TYPES: () => { return client.encode("ABF8713C", []); },
        EVENT_ID_PARAMETER_TYPES: () => { return client.encode("C3388F27", []); }
    }; };
    export const Decode = <Tx>(client: Provider<Tx>, data: Uint8Array) => { return {
        EVENT_ID_DATA_TYPES: (): [Buffer] => { return client.decode(data, ["bytes32"]); },
        EVENT_ID_PARAMETER_TYPES: (): [Buffer] => { return client.decode(data, ["bytes32"]); }
    }; };
}