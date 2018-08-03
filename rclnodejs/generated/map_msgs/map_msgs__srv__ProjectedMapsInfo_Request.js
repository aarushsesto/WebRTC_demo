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
const ProjectedMapInfoWrapper = require('../../generated/map_msgs/map_msgs__msg__ProjectedMapInfo.js');
const ProjectedMapsInfo_RequestRefStruct = StructType({
  projected_maps_info: ProjectedMapInfoWrapper.refObjectArrayType,
});
const ProjectedMapsInfo_RequestRefArray = ArrayType(ProjectedMapsInfo_RequestRefStruct);
const ProjectedMapsInfo_RequestRefStructArray = StructType({
  data: ProjectedMapsInfo_RequestRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class ProjectedMapsInfo_RequestWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new ProjectedMapsInfo_RequestRefStruct(other._refObject.toObject());
      this._wrapperFields.projected_maps_info = ProjectedMapInfoWrapper.createArray();
      this._wrapperFields.projected_maps_info.copy(other._wrapperFields.projected_maps_info);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new ProjectedMapsInfo_RequestRefStruct();
    this._wrapperFields.projected_maps_info = ProjectedMapInfoWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new ProjectedMapsInfo_RequestWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new ProjectedMapsInfo_RequestArrayWrapper;
  }
  static get ArrayType() {
    return ProjectedMapsInfo_RequestArrayWrapper;
  }
  static get refObjectArrayType() {
    return ProjectedMapsInfo_RequestRefStructArray
  }
  static get refObjectType() {
    return ProjectedMapsInfo_RequestRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
    }
    this._wrapperFields.projected_maps_info.freeze(own, checkConsistency);
    this._refObject.projected_maps_info = this._wrapperFields.projected_maps_info.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.projected_maps_info.copyRefObject(refObject.projected_maps_info);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    if (refObject.projected_maps_info.size != 0) {
      ProjectedMapInfoWrapper.ArrayType.freeArray(refObject.projected_maps_info);
      if (ProjectedMapInfoWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.projected_maps_info, ProjectedMapInfoWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.projected_maps_info, ProjectedMapInfoWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    ProjectedMapsInfo_RequestWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'map_msgs', subFolder: 'srv', interfaceName: 'ProjectedMapsInfo_Request'};
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
  get projected_maps_info() {
    return this._wrapperFields.projected_maps_info;
  }
  set projected_maps_info(value) {
    this._wrapperFields.projected_maps_info.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new ProjectedMapsInfo_RequestRefStruct(refObject.toObject());
    this._wrapperFields.projected_maps_info.copyRefObject(this._refObject.projected_maps_info);
  }
  copy(other) {
    this._refObject = new ProjectedMapsInfo_RequestRefStruct(other._refObject.toObject());
    this._wrapperFields.projected_maps_info.copy(other._wrapperFields.projected_maps_info);
  }
  static get classType() {
    return ProjectedMapsInfo_RequestWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"projected_maps_info","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"map_msgs","type":"ProjectedMapInfo","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"map_msgs","type":"ProjectedMapsInfo_Request","stringUpperBound":null,"isPrimitiveType":false},"msgName":"ProjectedMapsInfo_Request"};
  }
  hasMember(name) {
    let memberNames = ["projected_maps_info"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class ProjectedMapsInfo_RequestArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to ProjectedMapsInfo_RequestArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to ProjectedMapsInfo_RequestArrayWrapper.capacity setter');
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
    this._refArray = new ProjectedMapsInfo_RequestRefArray(size);
    this._refObject = new ProjectedMapsInfo_RequestRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new ProjectedMapsInfo_RequestWrapper());
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
    if (! (other instanceof ProjectedMapsInfo_RequestArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "ProjectedMapsInfo_RequestArrayWrapper".');
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
      ProjectedMapsInfo_RequestWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return ProjectedMapsInfo_RequestWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return ProjectedMapsInfo_RequestArrayWrapper;
  }
}
module.exports = ProjectedMapsInfo_RequestWrapper;
/*
 * The following is the original spec object coming from parser:
{
  "constants": [],
  "fields": [
    {
      "name": "projected_maps_info",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "map_msgs",
        "type": "ProjectedMapInfo",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "map_msgs",
    "type": "ProjectedMapsInfo_Request",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "ProjectedMapsInfo_Request"
}
*/
