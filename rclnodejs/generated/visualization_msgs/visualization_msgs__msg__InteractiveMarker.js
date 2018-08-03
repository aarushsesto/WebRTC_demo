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
const PoseWrapper = require('../../generated/geometry_msgs/geometry_msgs__msg__Pose.js');
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const MenuEntryWrapper = require('../../generated/visualization_msgs/visualization_msgs__msg__MenuEntry.js');
const InteractiveMarkerControlWrapper = require('../../generated/visualization_msgs/visualization_msgs__msg__InteractiveMarkerControl.js');
const InteractiveMarkerRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  pose: PoseWrapper.refObjectType,
  name: primitiveTypes.string,
  description: primitiveTypes.string,
  scale: primitiveTypes.float32,
  menu_entries: MenuEntryWrapper.refObjectArrayType,
  controls: InteractiveMarkerControlWrapper.refObjectArrayType,
});
const InteractiveMarkerRefArray = ArrayType(InteractiveMarkerRefStruct);
const InteractiveMarkerRefStructArray = StructType({
  data: InteractiveMarkerRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class InteractiveMarkerWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new InteractiveMarkerRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._wrapperFields.pose =  new PoseWrapper(other._wrapperFields.pose);
      this._nameIntialized = true;
      this._wrapperFields.name =  new StringWrapper(other._wrapperFields.name);
      this._descriptionIntialized = true;
      this._wrapperFields.description =  new StringWrapper(other._wrapperFields.description);
      this._scaleIntialized = true;
      this._wrapperFields.menu_entries = MenuEntryWrapper.createArray();
      this._wrapperFields.menu_entries.copy(other._wrapperFields.menu_entries);
      this._wrapperFields.controls = InteractiveMarkerControlWrapper.createArray();
      this._wrapperFields.controls.copy(other._wrapperFields.controls);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new InteractiveMarkerRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._wrapperFields.pose = new PoseWrapper();
    this._nameIntialized = false;
    this._wrapperFields.name = new StringWrapper();
    this._descriptionIntialized = false;
    this._wrapperFields.description = new StringWrapper();
    this._scaleIntialized = false;
    this._wrapperFields.menu_entries = MenuEntryWrapper.createArray();
    this._wrapperFields.controls = InteractiveMarkerControlWrapper.createArray();
  }
  static createFromRefObject(refObject) {
    let self = new InteractiveMarkerWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new InteractiveMarkerArrayWrapper;
  }
  static get ArrayType() {
    return InteractiveMarkerArrayWrapper;
  }
  static get refObjectArrayType() {
    return InteractiveMarkerRefStructArray
  }
  static get refObjectType() {
    return InteractiveMarkerRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._nameIntialized) {
        throw new TypeError('Invalid argument: name in InteractiveMarker');
      }
      if (!this._descriptionIntialized) {
        throw new TypeError('Invalid argument: description in InteractiveMarker');
      }
      if (!this._scaleIntialized) {
        throw new TypeError('Invalid argument: scale in InteractiveMarker');
      }
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    this._wrapperFields.pose.freeze(own, checkConsistency);
    this._refObject.pose = this._wrapperFields.pose.refObject;
    if (own) {
      this._wrapperFields.name.freeze(own, checkConsistency);
    }
    this._refObject.name = this._wrapperFields.name.refObject;
    if (own) {
      this._wrapperFields.description.freeze(own, checkConsistency);
    }
    this._refObject.description = this._wrapperFields.description.refObject;
    this._wrapperFields.menu_entries.freeze(own, checkConsistency);
    this._refObject.menu_entries = this._wrapperFields.menu_entries.refObject;
    this._wrapperFields.controls.freeze(own, checkConsistency);
    this._refObject.controls = this._wrapperFields.controls.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._wrapperFields.pose.copyRefObject(refObject.pose);
    this._nameIntialized = true;
    this._wrapperFields.name.data = refObject.name.data;
    this._descriptionIntialized = true;
    this._wrapperFields.description.data = refObject.description.data;
    this._scaleIntialized = true;
    this._refObject.scale = refObject.scale;
    this._wrapperFields.menu_entries.copyRefObject(refObject.menu_entries);
    this._wrapperFields.controls.copyRefObject(refObject.controls);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    PoseWrapper.freeStruct(refObject.pose);
    StringWrapper.freeStruct(refObject.name);
    StringWrapper.freeStruct(refObject.description);
    if (refObject.menu_entries.size != 0) {
      MenuEntryWrapper.ArrayType.freeArray(refObject.menu_entries);
      if (MenuEntryWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.menu_entries, MenuEntryWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.menu_entries, MenuEntryWrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.controls.size != 0) {
      InteractiveMarkerControlWrapper.ArrayType.freeArray(refObject.controls);
      if (InteractiveMarkerControlWrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.controls, InteractiveMarkerControlWrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.controls, InteractiveMarkerControlWrapper.refObjectArrayType, 'data');
      }
    }
  }
  static destoryRawROS(msg) {
    InteractiveMarkerWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'visualization_msgs', subFolder: 'msg', interfaceName: 'InteractiveMarker'};
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
  get pose() {
    return this._wrapperFields.pose;
  }
  set pose(value) {
    this._wrapperFields.pose.copy(value);
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
  get description() {
    if (!this._descriptionIntialized) {
      return undefined;
    }
    return this._wrapperFields.description.data;
  }
  set description(value) {
    this._descriptionIntialized = true;
    this._wrapperFields.description.data = value;
  }
  get scale() {
    if (!this._scaleIntialized) {
      return undefined;
    }
    return this._refObject.scale;
  }
  set scale(value) {
    this._scaleIntialized = true;
    this._refObject.scale = value;
  }
  get menu_entries() {
    return this._wrapperFields.menu_entries;
  }
  set menu_entries(value) {
    this._wrapperFields.menu_entries.fill(value);
  }
  get controls() {
    return this._wrapperFields.controls;
  }
  set controls(value) {
    this._wrapperFields.controls.fill(value);
  }
  copyRefObject(refObject) {
    this._refObject = new InteractiveMarkerRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._wrapperFields.pose.copyRefObject(this._refObject.pose);
    this._nameIntialized = true;
    this._wrapperFields.name.copyRefObject(this._refObject.name);
    this._descriptionIntialized = true;
    this._wrapperFields.description.copyRefObject(this._refObject.description);
    this._scaleIntialized = true;
    this._wrapperFields.menu_entries.copyRefObject(this._refObject.menu_entries);
    this._wrapperFields.controls.copyRefObject(this._refObject.controls);
  }
  copy(other) {
    this._refObject = new InteractiveMarkerRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._wrapperFields.pose.copy(other._wrapperFields.pose);
    this._nameIntialized = true;
    this._wrapperFields.name.copy(other._wrapperFields.name);
    this._descriptionIntialized = true;
    this._wrapperFields.description.copy(other._wrapperFields.description);
    this._scaleIntialized = true;
    this._wrapperFields.menu_entries.copy(other._wrapperFields.menu_entries);
    this._wrapperFields.controls.copy(other._wrapperFields.controls);
  }
  static get classType() {
    return InteractiveMarkerWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"pose","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"geometry_msgs","type":"Pose","stringUpperBound":null,"isPrimitiveType":false}},{"name":"name","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"description","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"scale","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"float32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"menu_entries","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"visualization_msgs","type":"MenuEntry","stringUpperBound":null,"isPrimitiveType":false}},{"name":"controls","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":"visualization_msgs","type":"InteractiveMarkerControl","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"visualization_msgs","type":"InteractiveMarker","stringUpperBound":null,"isPrimitiveType":false},"msgName":"InteractiveMarker"};
  }
  hasMember(name) {
    let memberNames = ["header","pose","name","description","scale","menu_entries","controls"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class InteractiveMarkerArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to InteractiveMarkerArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to InteractiveMarkerArrayWrapper.capacity setter');
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
    this._refArray = new InteractiveMarkerRefArray(size);
    this._refObject = new InteractiveMarkerRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new InteractiveMarkerWrapper());
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
    if (! (other instanceof InteractiveMarkerArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "InteractiveMarkerArrayWrapper".');
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
      InteractiveMarkerWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return InteractiveMarkerWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return InteractiveMarkerArrayWrapper;
  }
}
module.exports = InteractiveMarkerWrapper;
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
      "name": "pose",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "geometry_msgs",
        "type": "Pose",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
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
      "name": "description",
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
      "name": "scale",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": null,
        "type": "float32",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "menu_entries",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "visualization_msgs",
        "type": "MenuEntry",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    },
    {
      "name": "controls",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": "visualization_msgs",
        "type": "InteractiveMarkerControl",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "visualization_msgs",
    "type": "InteractiveMarker",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "InteractiveMarker"
}
*/
