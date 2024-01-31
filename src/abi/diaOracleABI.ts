import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './diaOracleABI.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OracleUpdate: new LogEvent<([key: string, value: bigint, timestamp: bigint] & {key: string, value: bigint, timestamp: bigint})>(
        abi, '0xa7fc99ed7617309ee23f63ae90196a1e490d362e6f6a547a59bc809ee2291782'
    ),
    UpdaterAddressChange: new LogEvent<([newUpdater: string] & {newUpdater: string})>(
        abi, '0x121e958a4cadf7f8dadefa22cc019700365240223668418faebed197da07089f'
    ),
}

export const functions = {
    getValue: new Func<[key: string], {key: string}, [_: bigint, _: bigint]>(
        abi, '0x960384a0'
    ),
    setValue: new Func<[key: string, value: bigint, timestamp: bigint], {key: string, value: bigint, timestamp: bigint}, []>(
        abi, '0x7898e0c2'
    ),
    updateOracleUpdaterAddress: new Func<[newOracleUpdaterAddress: string], {newOracleUpdaterAddress: string}, []>(
        abi, '0x6aa45efc'
    ),
    values: new Func<[_: string], {}, bigint>(
        abi, '0x5a9ade8b'
    ),
}

export class Contract extends ContractBase {

    getValue(key: string): Promise<[_: bigint, _: bigint]> {
        return this.eth_call(functions.getValue, [key])
    }

    values(arg0: string): Promise<bigint> {
        return this.eth_call(functions.values, [arg0])
    }
}
