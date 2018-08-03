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
const TimeWrapper = require('../../generated/builtin_interfaces/builtin_interfaces__msg__Time.js');
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const TimeReferenceRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  time_ref: TimeWrapper.refObjectType,
  source: primitiveTypes.string,
});
const TimeReferenceRefArray = ArrayType(TimeReferenceRefStruct);
const TimeReferenceRefStructArray = StructType({
  data: TimeReferenceRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class TimeReferenceWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new TimeReferenceRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._wrapperFields.time_ref =  new TimeWrapper(other._wrapperFields.time_ref);
      this._sourceIntialized = true;
      this._wrapperFields.source =  new StringWrapper(other._wrapperFields.source);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new TimeReferenceRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._wrapperFields.time_ref = new TimeWrapper();
    this._sourceIntialized = false;
    this._wrapperFields.source = new StringWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new TimeReferenceWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new TimeReferenceArrayWrapper;
  }
  static get ArrayType() {
    return TimeReferenceArrayWrapper;
  }
  static get refObjectArrayType() {
    return TimeReferenceRefStructArray
  }
  static get refObjectType() {
    return TimeReferenceRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._sourceIntialized) {
        throw new TypeError('Invalid argument: source in TimeReference');
      }
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    this._wrapperFields.time_ref.freeze(own, checkConsistency);
    this._refObject.time_ref = this._wrapperFields.time_ref.refObject;
    if (own) {
      this._wrapperFields.source.freeze(own, checkConsistency);
    }
    this._refObject.source = this._wrapperFields.source.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._wrapperFields.time_ref.copyRefObject(refObject.time_ref);
    this._sourceIntialized = true;
    this._wrapperFields.source.data = refObject.source.data;
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    TimeWrapper.freeStruct(refObject.time_ref);
    StringWrapper.freeStruct(refObject.source);
  }
  static destoryRawROS(msg) {
    TimeReferenceWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'sensor_msgs', subFolder: 'msg', interfaceName: 'TimeReference'};
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
  get time_ref() {
    return this._wrapperFields.time_ref;
  }
  set time_ref(value) {
    this._wrapperFields.time_ref.copy(value);
  }
  get source() {
    if (!this._sourceIntialized) {
      return undefined;
    }
    return this._wrapperFields.source.data;
  }
  set source(value) {
    this._sourceIntialized = true;
    this._wrapperFields.source.data = value;
  }
  copyRefObject(refObject) {
    this._refObject = new TimeReferenceRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._wrapperFields.time_ref.copyRefObject(this._refObject.time_ref);
    this._sourceIntialized = true;
    this._wrapperFields.source.copyRefObject(this._refObject.source);
  }
  copy(other) {
    this._refObject = new TimeReferenceRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._wrapperFields.time_ref.copy(other._wrapperFields.time_ref);
    this._sourceIntialized = true;
    this._wrapperFields.source.copy(other._wrapperFields.source);
  }
  static get classType() {
    return TimeReferenceWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"time_ref","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"builtin_interfaces","type":"Time","stringUpperBound":null,"isPrimitiveType":false}},{"name":"source","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}}],"baseType":{"pkgName":"sensor_msgs","type":"TimeReference","stringUpperBound":null,"isPrimitiveType":false},"msgName":"TimeReference"};
  }
  hasMember(name) {
    let memberNames = ["header","time_ref","source"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class TimeReferenceArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to TimeReferenceArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to TimeReferenceArrayWrapper.capacity setter');
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
    this._refArray = new TimeReferenceRefArray(size);
    this._refObject = new TimeReferenceRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new TimeReferenceWrapper());
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
    if (! (other instanceof TimeReferenceArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "TimeReferenceArrayWrapper".');
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
      TimeReferenceWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return TimeReferenceWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return TimeReferenceArrayWrapper;
  }
}
module.exports = TimeReferenceWrapper;
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
      "name": "time_ref",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "builtin_interfaces",
        "type": "Time",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "source",
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
    }
  ],
  "baseType": {
    "pkgName": "sensor_msgs",
    "type": "TimeReference",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "TimeReference"
}
*/
