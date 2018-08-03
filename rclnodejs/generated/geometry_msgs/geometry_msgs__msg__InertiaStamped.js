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
const HeaderWrapper = require('../../generated/std_msgs/std_msgs__msg__Header.js');
const InertiaWrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__Inertia.js');
const InertiaStampedRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  inertia: InertiaWrapper.refObjectType,
});
const InertiaStampedRefArray = ArrayType(InertiaStampedRefStruct);
const InertiaStampedRefStructArray = StructType({
  data: InertiaStampedRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class InertiaStampedWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new InertiaStampedRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._wrapperFields.inertia =  new InertiaWrapper(other._wrapperFields.inertia);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new InertiaStampedRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._wrapperFields.inertia = new InertiaWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new InertiaStampedWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new InertiaStampedArrayWrapper;
  }
  static get ArrayType() {
    return InertiaStampedArrayWrapper;
  }
  static get refObjectArrayType() {
    return InertiaStampedRefStructArray
  }
  static get refObjectType() {
    return InertiaStampedRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    this._wrapperFields.inertia.freeze(own, checkConsistency);
    this._refObject.inertia = this._wrapperFields.inertia.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._wrapperFields.inertia.copyRefObject(refObject.inertia);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    InertiaWrapper.freeStruct(refObject.inertia);
  }
  static destoryRawROS(msg) {
    InertiaStampedWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'geometry_msgs', subFolder: 'msg', interfaceName: 'InertiaStamped'};
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
  get header() {
    return this._wrapperFields.header;
  }
  set header(value) {
    this._wrapperFields.header.copy(value);
  }
  get inertia() {
    return this._wrapperFields.inertia;
  }
  set inertia(value) {
    this._wrapperFields.inertia.copy(value);
  }
  copyRefObject(refObject) {
    this._refObject = new InertiaStampedRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._wrapperFields.inertia.copyRefObject(this._refObject.inertia);
  }
  copy(other) {
    this._refObject = new InertiaStampedRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._wrapperFields.inertia.copy(other._wrapperFields.inertia);
  }
  static get classType() {
    return InertiaStampedWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"inertia","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"geometry_msgs","type":"Inertia","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"geometry_msgs","type":"InertiaStamped","stringUpperBound":null,"isPrimitiveType":false},"msgName":"InertiaStamped"};
  }
  hasMember(name) {
    let memberNames = ["header","inertia"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class InertiaStampedArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to InertiaStampedArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to InertiaStampedArrayWrapper.capacity setter');
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
    this._refArray = new InertiaStampedRefArray(size);
    this._refObject = new InertiaStampedRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new InertiaStampedWrapper());
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
    if (! (other instanceof InertiaStampedArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "InertiaStampedArrayWrapper".');
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
      InertiaStampedWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return InertiaStampedWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return InertiaStampedArrayWrapper;
  }
}
module.exports = InertiaStampedWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "header",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "std_msgs",
        "type": "Header",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "inertia",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "geometry_msgs",
        "type": "Inertia",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "geometry_msgs",
    "type": "InertiaStamped",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "InertiaStamped"
}
*/
