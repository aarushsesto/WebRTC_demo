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
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const PointFieldRefStruct = StructType({
  name: primitiveTypes.string,
  offset: primitiveTypes.uint32,
  datatype: primitiveTypes.uint8,
  count: primitiveTypes.uint32,
});
const PointFieldRefArray = ArrayType(PointFieldRefStruct);
const PointFieldRefStructArray = StructType({
  data: PointFieldRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class PointFieldWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new PointFieldRefStruct(other._refObject.toObject());
      this._nameIntialized = true;
      this._wrapperFields.name =  new StringWrapper(other._wrapperFields.name);
      this._offsetIntialized = true;
      this._datatypeIntialized = true;
      this._countIntialized = true;
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new PointFieldRefStruct();
    this._nameIntialized = false;
    this._wrapperFields.name = new StringWrapper();
    this._offsetIntialized = false;
    this._datatypeIntialized = false;
    this._countIntialized = false;
  }
  static createFromRefObject(refObject) {
    let self = new PointFieldWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new PointFieldArrayWrapper;
  }
  static get ArrayType() {
    return PointFieldArrayWrapper;
  }
  static get refObjectArrayType() {
    return PointFieldRefStructArray
  }
  static get refObjectType() {
    return PointFieldRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._nameIntialized) {
        throw new TypeError('Invalid argument: name in PointField');
      }
      if (!this._offsetIntialized) {
        throw new TypeError('Invalid argument: offset in PointField');
      }
      if (!this._datatypeIntialized) {
        throw new TypeError('Invalid argument: datatype in PointField');
      }
      if (!this._countIntialized) {
        throw new TypeError('Invalid argument: count in PointField');
      }
    }
    if (own) {
      this._wrapperFields.name.freeze(own, checkConsistency);
    }
    this._refObject.name = this._wrapperFields.name.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._nameIntialized = true;
    this._wrapperFields.name.data = refObject.name.data;
    this._offsetIntialized = true;
    this._refObject.offset = refObject.offset;
    this._datatypeIntialized = true;
    this._refObject.datatype = refObject.datatype;
    this._countIntialized = true;
    this._refObject.count = refObject.count;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    StringWrapper.freeStruct(refObject.name);
  }
  static destoryRawROS(msg) {
    PointFieldWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'sensor_msgs', subFolder: 'msg', interfaceName: 'PointField'};
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
  get name() {
    if (!this._nameIntialized) {
      return undefined;
    }
    return this._wrapperFields.name.data;
  }
  set name(value) {
    this._nameIntialized = true;
    this._wrapperFields.name.data = value;
  }
  get offset() {
    if (!this._offsetIntialized) {
      return undefined;
    }
    return this._refObject.offset;
  }
  set offset(value) {
    this._offsetIntialized = true;
    this._refObject.offset = value;
  }
  get datatype() {
    if (!this._datatypeIntialized) {
      return undefined;
    }
    return this._refObject.datatype;
  }
  set datatype(value) {
    this._datatypeIntialized = true;
    this._refObject.datatype = value;
  }
  get count() {
    if (!this._countIntialized) {
      return undefined;
    }
    return this._refObject.count;
  }
  set count(value) {
    this._countIntialized = true;
    this._refObject.count = value;
  }
  copyRefObject(refObject) {
    this._refObject = new PointFieldRefStruct(refObject.toObject());
    this._nameIntialized = true;
    this._wrapperFields.name.copyRefObject(this._refObject.name);
    this._offsetIntialized = true;
    this._datatypeIntialized = true;
    this._countIntialized = true;
  }
  copy(other) {
    this._refObject = new PointFieldRefStruct(other._refObject.toObject());
    this._nameIntialized = true;
    this._wrapperFields.name.copy(other._wrapperFields.name);
    this._offsetIntialized = true;
    this._datatypeIntialized = true;
    this._countIntialized = true;
  }
  static get classType() {
    return PointFieldWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[{"type":"uint8","name":"INT8","value":1},{"type":"uint8","name":"UINT8","value":2},{"type":"uint8","name":"INT16","value":3},{"type":"uint8","name":"UINT16","value":4},{"type":"uint8","name":"INT32","value":5},{"type":"uint8","name":"UINT32","value":6},{"type":"uint8","name":"FLOAT32","value":7},{"type":"uint8","name":"FLOAT64","value":8}],"fields":[{"name":"name","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"offset","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"datatype","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint8","stringUpperBound":null,"isPrimitiveType":true}},{"name":"count","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"sensor_msgs","type":"PointField","stringUpperBound":null,"isPrimitiveType":false},"msgName":"PointField"};
  }
  hasMember(name) {
    let memberNames = ["name","offset","datatype","count"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class PointFieldArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to PointFieldArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to PointFieldArrayWrapper.capacity setter');
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
    this._refArray = new PointFieldRefArray(size);
    this._refObject = new PointFieldRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new PointFieldWrapper());
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
    if (! (other instanceof PointFieldArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "PointFieldArrayWrapper".');
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
      PointFieldWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return PointFieldWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return PointFieldArrayWrapper;
  }
}
// Define constants (8 in total)
Object.defineProperty(PointFieldWrapper, "INT8", {value: 1, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "UINT8", {value: 2, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "INT16", {value: 3, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "UINT16", {value: 4, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "INT32", {value: 5, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "UINT32", {value: 6, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "FLOAT32", {value: 7, writable: false, enumerable: true, configurable: true});
Object.defineProperty(PointFieldWrapper, "FLOAT64", {value: 8, writable: false, enumerable: true, configurable: true});
module.exports = PointFieldWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [
    {
      "type": "uint8",
      "name": "INT8",
      "value": 1
    },
    {
      "type": "uint8",
      "name": "UINT8",
      "value": 2
    },
    {
      "type": "uint8",
      "name": "INT16",
      "value": 3
    },
    {
      "type": "uint8",
      "name": "UINT16",
      "value": 4
    },
    {
      "type": "uint8",
      "name": "INT32",
      "value": 5
    },
    {
      "type": "uint8",
      "name": "UINT32",
      "value": 6
    },
    {
      "type": "uint8",
      "name": "FLOAT32",
      "value": 7
    },
    {
      "type": "uint8",
      "name": "FLOAT64",
      "value": 8
    }
  ],
  "fields": [
    {
      "name": "name",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "string",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "offset",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "datatype",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint8",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "count",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "uint32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "sensor_msgs",
    "type": "PointField",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "PointField"
}
*/
