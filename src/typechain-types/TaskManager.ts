/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace TaskManager {
  export type TodoItemStruct = {
    itemTitle: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    checked: PromiseOrValue<boolean>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
  };

  export type TodoItemStructOutput = [
    string,
    string,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    itemTitle: string;
    creator: string;
    checked: boolean;
    startTime: BigNumber;
    endTime: BigNumber;
  };
}

export interface TaskManagerInterface extends utils.Interface {
  functions: {
    "createTodo(string,string)": FunctionFragment;
    "deleteTodo(uint256)": FunctionFragment;
    "editTodo(string,uint256)": FunctionFragment;
    "markAsDone(uint256)": FunctionFragment;
    "showAllTodo()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createTodo"
      | "deleteTodo"
      | "editTodo"
      | "markAsDone"
      | "showAllTodo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTodo",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteTodo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "editTodo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "markAsDone",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "showAllTodo",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "createTodo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deleteTodo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "editTodo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "markAsDone", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "showAllTodo",
    data: BytesLike
  ): Result;

  events: {
    "todoCreated(string,string,uint256)": EventFragment;
    "todoMarkedAsDone(string,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "todoCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "todoMarkedAsDone"): EventFragment;
}

export interface todoCreatedEventObject {
  itemTitle_: string;
  message: string;
  time: BigNumber;
}
export type todoCreatedEvent = TypedEvent<
  [string, string, BigNumber],
  todoCreatedEventObject
>;

export type todoCreatedEventFilter = TypedEventFilter<todoCreatedEvent>;

export interface todoMarkedAsDoneEventObject {
  itemTitle_: string;
  message: string;
  time: BigNumber;
}
export type todoMarkedAsDoneEvent = TypedEvent<
  [string, string, BigNumber],
  todoMarkedAsDoneEventObject
>;

export type todoMarkedAsDoneEventFilter =
  TypedEventFilter<todoMarkedAsDoneEvent>;

export interface TaskManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TaskManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createTodo(
      _itemTitle: PromiseOrValue<string>,
      _creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteTodo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    editTodo(
      _itemTitle: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    markAsDone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    showAllTodo(
      overrides?: CallOverrides
    ): Promise<[TaskManager.TodoItemStructOutput[]]>;
  };

  createTodo(
    _itemTitle: PromiseOrValue<string>,
    _creator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteTodo(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  editTodo(
    _itemTitle: PromiseOrValue<string>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  markAsDone(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  showAllTodo(
    overrides?: CallOverrides
  ): Promise<TaskManager.TodoItemStructOutput[]>;

  callStatic: {
    createTodo(
      _itemTitle: PromiseOrValue<string>,
      _creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<TaskManager.TodoItemStructOutput[]>;

    deleteTodo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    editTodo(
      _itemTitle: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<TaskManager.TodoItemStructOutput[]>;

    markAsDone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    showAllTodo(
      overrides?: CallOverrides
    ): Promise<TaskManager.TodoItemStructOutput[]>;
  };

  filters: {
    "todoCreated(string,string,uint256)"(
      itemTitle_?: PromiseOrValue<string> | null,
      message?: PromiseOrValue<string> | null,
      time?: PromiseOrValue<BigNumberish> | null
    ): todoCreatedEventFilter;
    todoCreated(
      itemTitle_?: PromiseOrValue<string> | null,
      message?: PromiseOrValue<string> | null,
      time?: PromiseOrValue<BigNumberish> | null
    ): todoCreatedEventFilter;

    "todoMarkedAsDone(string,string,uint256)"(
      itemTitle_?: PromiseOrValue<string> | null,
      message?: PromiseOrValue<string> | null,
      time?: PromiseOrValue<BigNumberish> | null
    ): todoMarkedAsDoneEventFilter;
    todoMarkedAsDone(
      itemTitle_?: PromiseOrValue<string> | null,
      message?: PromiseOrValue<string> | null,
      time?: PromiseOrValue<BigNumberish> | null
    ): todoMarkedAsDoneEventFilter;
  };

  estimateGas: {
    createTodo(
      _itemTitle: PromiseOrValue<string>,
      _creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteTodo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    editTodo(
      _itemTitle: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    markAsDone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    showAllTodo(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createTodo(
      _itemTitle: PromiseOrValue<string>,
      _creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteTodo(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    editTodo(
      _itemTitle: PromiseOrValue<string>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    markAsDone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    showAllTodo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
