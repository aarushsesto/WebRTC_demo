// This file is automatically generated by Intel rclnodejs
//
// *** DO NOT EDIT directly
//
'use strict';
const StructType = require('ref-struct');
const ref = require('ref');
const ArrayType = require('ref-array');
const primitiveTypes = require('../../rosidl_gen/generator_primitive.js');
const deallocator = require('../../rosidl_gen/deallocator.js');
const translator = require('../../rosidl_gen/message_translator.js');
const GetMap_RequestRefStruct = StructType({
  _dummy: primitiveTypes.bool,
});
const GetMap_RequestRefArray = ArrayType(GetMap_RequestRefStruct);
const GetMap_RequestRefStructArray = StructType({
  data: GetMap_RequestRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class GetMap_RequestWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new GetMap_RequestRefStruct(other._refObject.toObject());
      this.__dummyIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new GetMap_RequestRefStruct();
    this.__dummyIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new GetMap_RequestWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new GetMap_RequestArrayWrapper;
  }
  static get ArrayType() {
    return GetMap_RequestArrayWrapper;
  }
  static get refObjectArrayType() {
    return GetMap_RequestRefStructArray
  }
  static get refObjectType() {
    return GetMap_RequestRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this.__dummyIntialized) {
        throw new TypeError('Invalid argument: _dummy in GetMap_Request');
      }
    }
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this.__dummyIntialized = true;
    this._refObject._dummy = refObject._dummy;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
  }
  static destoryRawROS(msg) {
    GetMap_RequestWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'nav_msgs', subFolder: 'srv', interfaceName: 'GetMap_Request'};
  }
  static isPrimitive() {
    return false;
  }
  static get isROSArray() {
    return false;
  }
  get refObject() {
    return this._refObject;
  }
  get _dummy() {
    if (!this.__dummyIntialized) {
      return undefined;
    }
    return this._refObject._dummy;
  }
  set _dummy(value) {
    this.__dummyIntialized = true;
    this._refObject._dummy = value;
  }
  copyRefObject(refObject) {
    this._refObject = new GetMap_RequestRefStruct(refObject.toObject());
    this.__dummyIntialized = true;
  }
  copy(other) {
    this._refObject = new GetMap_RequestRefStruct(other._refObject.toObject());
    this.__dummyIntialized = true;
  }
  static get classType() {
    return GetMap_RequestWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[],"baseType":{"pkgName":"nav_msgs","type":"GetMap_Request","stringUpperBound":null,"isPrimitiveType":false},"msgName":"GetMap_Request"};
  }
  hasMember(name) {
    let memberNames = ["_dummy"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class GetMap_RequestArrayWrapper {
  constructor(size = 0) {
    this._resize(size);
  }
  toRawROS() {
    return this._refObject.ref();
  }
  fill(values) {
    const length = values.length;
    this._resize(length);
    values.forEach((value, index) => {
      this._wrappers[index].copy(value);
    });
  }
  // Put all data currently stored in `this._wrappers` into `this._refObject`
  freeze(own) {
    this._wrappers.forEach((wrapper, index) => {
      wrapper.freeze(own);
      this._refArray[index] = wrapper.refObject;
    });
    this._refObject.size = this._wrappers.length;
    this._refObject.capacity = this._wrappers.length;
    this._refObject.data = this._refArray.buffer;
  }
  get refObject() {
    return this._refObject;
  }
  get data() {
    return this._wrappers;
  }
  get size() {
    return this._wrappers.length;
  }
  set size(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GetMap_RequestArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to GetMap_RequestArrayWrapper.capacity setter');
    }
    return this._resize(value);
  }
  get refObject() {
    return this._refObject;
  }
  _resize(size) {
    if (size < 0) {
      throw new RangeError('Invalid argument: should provide a positive number');
      return;
    }
    this._refArray = new GetMap_RequestRefArray(size);
    this._refObject = new GetMap_RequestRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new GetMap_RequestWrapper());
    }
  }
  // Copy all data from `this._refObject` into `this._wrappers`
  copyRefObject(refObject) {
    this._refObject = refObject;
    let refObjectArray = this._refObject.data;
    refObjectArray.length = this._refObject.size;
    this._resize(this._refObject.size);
    for (let index = 0; index < this._refObject.size; index++) {
      this._wrappers[index].copyRefObject(refObjectArray[index]);
    }
  }
  copy(other) {
    if (! (other instanceof GetMap_RequestArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "GetMap_RequestArrayWrapper".');
    }
    this._resize(other.size);
    // Array deep copy
    other._wrappers.forEach((wrapper, index) => {
      this._wrappers[index].copy(wrapper);
    });
  }
  static freeArray(refObject) {
    let refObjectArray = refObject.data;
    refObjectArray.length = refObject.size;
    for (let index = 0; index < refObject.size; index++) {
      GetMap_RequestWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return GetMap_RequestWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return GetMap_RequestArrayWrapper;
  }
}
module.exports = GetMap_RequestWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [],
  "baseType": {
    "pkgName": "nav_msgs",
    "type": "GetMap_Request",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "GetMap_Request"
}
*/
