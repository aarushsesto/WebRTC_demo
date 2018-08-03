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
const Float64Wrapper = require('../../generated/std_msgs/std_msgs__msg__Float64.js');
const PlaneRefStruct = StructType({
  coef: Float64Wrapper.refObjectArrayType,
});
const PlaneRefArray = ArrayType(PlaneRefStruct);
const PlaneRefStructArray = StructType({
  data: PlaneRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class PlaneWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new PlaneRefStruct(other._refObject.toObject());
      this._wrapperFields.coef = Float64Wrapper.createArray();
      this._wrapperFields.coef.copy(other._wrapperFields.coef);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new PlaneRefStruct();
    this._wrapperFields.coef = Float64Wrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new PlaneWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new PlaneArrayWrapper;
  }
  static get ArrayType() {
    return PlaneArrayWrapper;
  }
  static get refObjectArrayType() {
    return PlaneRefStructArray
  }
  static get refObjectType() {
    return PlaneRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.coef.freeze(own, checkConsistency);
    this._refObject.coef = this._wrapperFields.coef.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.coef.copyRefObject(refObject.coef);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.coef.size != 0) {
      Float64Wrapper.ArrayType.freeArray(refObject.coef);
      if (Float64Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.coef, Float64Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.coef, Float64Wrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    PlaneWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'shape_msgs', subFolder: 'msg', interfaceName: 'Plane'};
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
  get coef() {
    return this._wrapperFields['coef'].data;
  }
  set coef(value) {
    this._wrapperFields['coef'].fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new PlaneRefStruct(refObject.toObject());
    this._wrapperFields.coef.copyRefObject(this._refObject.coef);
  }
  copy(other) {
    this._refObject = new PlaneRefStruct(other._refObject.toObject());
    this._wrapperFields.coef.copy(other._wrapperFields.coef);
  }
  static get classType() {
    return PlaneWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"coef","type":{"isArray":true,"arraySize":4,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":true,"pkgName":null,"type":"float64","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"shape_msgs","type":"Plane","stringUpperBound":null,"isPrimitiveType":false},"msgName":"Plane"};
  }
  hasMember(name) {
    let memberNames = ["coef"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class PlaneArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to PlaneArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to PlaneArrayWrapper.capacity setter');
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
    this._refArray = new PlaneRefArray(size);
    this._refObject = new PlaneRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new PlaneWrapper());
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
    if (! (other instanceof PlaneArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "PlaneArrayWrapper".');
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
      PlaneWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return PlaneWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return PlaneArrayWrapper;
  }
}
module.exports = PlaneWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "coef",
      "type": {
        "isArray": true,
        "arraySize": 4,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": true,
        "pkgName": null,
        "type": "float64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    }
  ],
  "baseType": {
    "pkgName": "shape_msgs",
    "type": "Plane",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "Plane"
}
*/
