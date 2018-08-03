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
const StringWrapper = require('../../generated/std_msgs/std_msgs__msg__String.js');
const Float64Wrapper = require('../../generated/std_msgs/std_msgs__msg__Float64.js');
const RegionOfInterestWrapper = require('../../generated/sensor_msgs/sensor_msgs__msg__RegionOfInterest.js');
const CameraInfoRefStruct = StructType({
  header: HeaderWrapper.refObjectType,
  height: primitiveTypes.uint32,
  width: primitiveTypes.uint32,
  distortion_model: primitiveTypes.string,
  d: Float64Wrapper.refObjectArrayType,
  k: Float64Wrapper.refObjectArrayType,
  r: Float64Wrapper.refObjectArrayType,
  p: Float64Wrapper.refObjectArrayType,
  binning_x: primitiveTypes.uint32,
  binning_y: primitiveTypes.uint32,
  roi: RegionOfInterestWrapper.refObjectType,
});
const CameraInfoRefArray = ArrayType(CameraInfoRefStruct);
const CameraInfoRefStructArray = StructType({
  data: CameraInfoRefArray,
  size: ref.types.size_t,
  capacity: ref.types.size_t
});
// Define the wrapper class.
class CameraInfoWrapper {
  constructor(other) {
    this._wrapperFields = {};
    if (typeof other === 'object' && other._refObject) {
      this._refObject = new CameraInfoRefStruct(other._refObject.toObject());
      this._wrapperFields.header =  new HeaderWrapper(other._wrapperFields.header);
      this._heightIntialized = true;
      this._widthIntialized = true;
      this._distortion_modelIntialized = true;
      this._wrapperFields.distortion_model =  new StringWrapper(other._wrapperFields.distortion_model);
      this._wrapperFields.d = Float64Wrapper.createArray();
      this._wrapperFields.d.copy(other._wrapperFields.d);
      this._wrapperFields.k = Float64Wrapper.createArray();
      this._wrapperFields.k.copy(other._wrapperFields.k);
      this._wrapperFields.r = Float64Wrapper.createArray();
      this._wrapperFields.r.copy(other._wrapperFields.r);
      this._wrapperFields.p = Float64Wrapper.createArray();
      this._wrapperFields.p.copy(other._wrapperFields.p);
      this._binning_xIntialized = true;
      this._binning_yIntialized = true;
      this._wrapperFields.roi =  new RegionOfInterestWrapper(other._wrapperFields.roi);
    } else if (typeof other !== 'undefined') {
      this._initMembers();
      translator.constructFromPlanObject(this, other);
    } else {
      this._initMembers();
    }
    this.freeze();
  }
  _initMembers() {
    this._refObject = new CameraInfoRefStruct();
    this._wrapperFields.header = new HeaderWrapper();
    this._heightIntialized = false;
    this._widthIntialized = false;
    this._distortion_modelIntialized = false;
    this._wrapperFields.distortion_model = new StringWrapper();
    this._wrapperFields.d = Float64Wrapper.createArray();
    this._wrapperFields.k = Float64Wrapper.createArray();
    this._wrapperFields.r = Float64Wrapper.createArray();
    this._wrapperFields.p = Float64Wrapper.createArray();
    this._binning_xIntialized = false;
    this._binning_yIntialized = false;
    this._wrapperFields.roi = new RegionOfInterestWrapper();
  }
  static createFromRefObject(refObject) {
    let self = new CameraInfoWrapper();
    self.copyRefObject(refObject);
    return self;
  }
  static createArray() {
    return new CameraInfoArrayWrapper;
  }
  static get ArrayType() {
    return CameraInfoArrayWrapper;
  }
  static get refObjectArrayType() {
    return CameraInfoRefStructArray
  }
  static get refObjectType() {
    return CameraInfoRefStruct;
  }
  toRawROS() {
    this.freeze(true);
    return this._refObject.ref();
  }
  freeze(own = false, checkConsistency = false) {
    if (checkConsistency) {
      if (!this._heightIntialized) {
        throw new TypeError('Invalid argument: height in CameraInfo');
      }
      if (!this._widthIntialized) {
        throw new TypeError('Invalid argument: width in CameraInfo');
      }
      if (!this._distortion_modelIntialized) {
        throw new TypeError('Invalid argument: distortion_model in CameraInfo');
      }
      if (!this._binning_xIntialized) {
        throw new TypeError('Invalid argument: binning_x in CameraInfo');
      }
      if (!this._binning_yIntialized) {
        throw new TypeError('Invalid argument: binning_y in CameraInfo');
      }
    }
    this._wrapperFields.header.freeze(own, checkConsistency);
    this._refObject.header = this._wrapperFields.header.refObject;
    if (own) {
      this._wrapperFields.distortion_model.freeze(own, checkConsistency);
    }
    this._refObject.distortion_model = this._wrapperFields.distortion_model.refObject;
    this._wrapperFields.d.freeze(own, checkConsistency);
    this._refObject.d = this._wrapperFields.d.refObject;
    this._wrapperFields.k.freeze(own, checkConsistency);
    this._refObject.k = this._wrapperFields.k.refObject;
    this._wrapperFields.r.freeze(own, checkConsistency);
    this._refObject.r = this._wrapperFields.r.refObject;
    this._wrapperFields.p.freeze(own, checkConsistency);
    this._refObject.p = this._wrapperFields.p.refObject;
    this._wrapperFields.roi.freeze(own, checkConsistency);
    this._refObject.roi = this._wrapperFields.roi.refObject;
  }
  serialize() {
    this.freeze(false, true);
    return this._refObject.ref();
  }
  deserialize(refObject) {
    this._wrapperFields.header.copyRefObject(refObject.header);
    this._heightIntialized = true;
    this._refObject.height = refObject.height;
    this._widthIntialized = true;
    this._refObject.width = refObject.width;
    this._distortion_modelIntialized = true;
    this._wrapperFields.distortion_model.data = refObject.distortion_model.data;
    this._wrapperFields.d.copyRefObject(refObject.d);
    this._wrapperFields.k.copyRefObject(refObject.k);
    this._wrapperFields.r.copyRefObject(refObject.r);
    this._wrapperFields.p.copyRefObject(refObject.p);
    this._binning_xIntialized = true;
    this._refObject.binning_x = refObject.binning_x;
    this._binning_yIntialized = true;
    this._refObject.binning_y = refObject.binning_y;
    this._wrapperFields.roi.copyRefObject(refObject.roi);
  }
  toPlainObject() {
    return translator.toPlainObject(this);
  }
  static freeStruct(refObject) {
    HeaderWrapper.freeStruct(refObject.header);
    StringWrapper.freeStruct(refObject.distortion_model);
    if (refObject.d.size != 0) {
      Float64Wrapper.ArrayType.freeArray(refObject.d);
      if (Float64Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.d, Float64Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.d, Float64Wrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.k.size != 0) {
      Float64Wrapper.ArrayType.freeArray(refObject.k);
      if (Float64Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.k, Float64Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.k, Float64Wrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.r.size != 0) {
      Float64Wrapper.ArrayType.freeArray(refObject.r);
      if (Float64Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.r, Float64Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.r, Float64Wrapper.refObjectArrayType, 'data');
      }
    }
    if (refObject.p.size != 0) {
      Float64Wrapper.ArrayType.freeArray(refObject.p);
      if (Float64Wrapper.ArrayType.useTypedArray) {
        deallocator.delayFreeStructMember(refObject.p, Float64Wrapper.refObjectArrayType, 'data');
      } else {
        deallocator.freeStructMember(refObject.p, Float64Wrapper.refObjectArrayType, 'data');
      }
    }
    RegionOfInterestWrapper.freeStruct(refObject.roi);
  }
  static destoryRawROS(msg) {
    CameraInfoWrapper.freeStruct(msg.refObject);
  }
  static type() {
    return {pkgName: 'sensor_msgs', subFolder: 'msg', interfaceName: 'CameraInfo'};
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
  get height() {
    if (!this._heightIntialized) {
      return undefined;
    }
    return this._refObject.height;
  }
  set height(value) {
    this._heightIntialized = true;
    this._refObject.height = value;
  }
  get width() {
    if (!this._widthIntialized) {
      return undefined;
    }
    return this._refObject.width;
  }
  set width(value) {
    this._widthIntialized = true;
    this._refObject.width = value;
  }
  get distortion_model() {
    if (!this._distortion_modelIntialized) {
      return undefined;
    }
    return this._wrapperFields.distortion_model.data;
  }
  set distortion_model(value) {
    this._distortion_modelIntialized = true;
    this._wrapperFields.distortion_model.data = value;
  }
  get d() {
    return this._wrapperFields['d'].data;
  }
  set d(value) {
    this._wrapperFields['d'].fill(value);
  }
  get k() {
    return this._wrapperFields['k'].data;
  }
  set k(value) {
    this._wrapperFields['k'].fill(value);
  }
  get r() {
    return this._wrapperFields['r'].data;
  }
  set r(value) {
    this._wrapperFields['r'].fill(value);
  }
  get p() {
    return this._wrapperFields['p'].data;
  }
  set p(value) {
    this._wrapperFields['p'].fill(value);
  }
  get binning_x() {
    if (!this._binning_xIntialized) {
      return undefined;
    }
    return this._refObject.binning_x;
  }
  set binning_x(value) {
    this._binning_xIntialized = true;
    this._refObject.binning_x = value;
  }
  get binning_y() {
    if (!this._binning_yIntialized) {
      return undefined;
    }
    return this._refObject.binning_y;
  }
  set binning_y(value) {
    this._binning_yIntialized = true;
    this._refObject.binning_y = value;
  }
  get roi() {
    return this._wrapperFields.roi;
  }
  set roi(value) {
    this._wrapperFields.roi.copy(value);
  }
  copyRefObject(refObject) {
    this._refObject = new CameraInfoRefStruct(refObject.toObject());
    this._wrapperFields.header.copyRefObject(this._refObject.header);
    this._heightIntialized = true;
    this._widthIntialized = true;
    this._distortion_modelIntialized = true;
    this._wrapperFields.distortion_model.copyRefObject(this._refObject.distortion_model);
    this._wrapperFields.d.copyRefObject(this._refObject.d);
    this._wrapperFields.k.copyRefObject(this._refObject.k);
    this._wrapperFields.r.copyRefObject(this._refObject.r);
    this._wrapperFields.p.copyRefObject(this._refObject.p);
    this._binning_xIntialized = true;
    this._binning_yIntialized = true;
    this._wrapperFields.roi.copyRefObject(this._refObject.roi);
  }
  copy(other) {
    this._refObject = new CameraInfoRefStruct(other._refObject.toObject());
    this._wrapperFields.header.copy(other._wrapperFields.header);
    this._heightIntialized = true;
    this._widthIntialized = true;
    this._distortion_modelIntialized = true;
    this._wrapperFields.distortion_model.copy(other._wrapperFields.distortion_model);
    this._wrapperFields.d.copy(other._wrapperFields.d);
    this._wrapperFields.k.copy(other._wrapperFields.k);
    this._wrapperFields.r.copy(other._wrapperFields.r);
    this._wrapperFields.p.copy(other._wrapperFields.p);
    this._binning_xIntialized = true;
    this._binning_yIntialized = true;
    this._wrapperFields.roi.copy(other._wrapperFields.roi);
  }
  static get classType() {
    return CameraInfoWrapper;
  }
  static get ROSMessageDef() {
    return {"constants":[],"fields":[{"name":"header","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"std_msgs","type":"Header","stringUpperBound":null,"isPrimitiveType":false}},{"name":"height","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"width","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"distortion_model","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"string","stringUpperBound":null,"isPrimitiveType":true}},{"name":"d","type":{"isArray":true,"arraySize":null,"isUpperBound":false,"isDynamicArray":true,"isFixedSizeArray":null,"pkgName":null,"type":"float64","stringUpperBound":null,"isPrimitiveType":true}},{"name":"k","type":{"isArray":true,"arraySize":9,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":true,"pkgName":null,"type":"float64","stringUpperBound":null,"isPrimitiveType":true}},{"name":"r","type":{"isArray":true,"arraySize":9,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":true,"pkgName":null,"type":"float64","stringUpperBound":null,"isPrimitiveType":true}},{"name":"p","type":{"isArray":true,"arraySize":12,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":true,"pkgName":null,"type":"float64","stringUpperBound":null,"isPrimitiveType":true}},{"name":"binning_x","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"binning_y","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":null,"type":"uint32","stringUpperBound":null,"isPrimitiveType":true}},{"name":"roi","type":{"isArray":false,"arraySize":null,"isUpperBound":false,"isDynamicArray":false,"isFixedSizeArray":false,"pkgName":"sensor_msgs","type":"RegionOfInterest","stringUpperBound":null,"isPrimitiveType":false}}],"baseType":{"pkgName":"sensor_msgs","type":"CameraInfo","stringUpperBound":null,"isPrimitiveType":false},"msgName":"CameraInfo"};
  }
  hasMember(name) {
    let memberNames = ["header","height","width","distortion_model","d","k","r","p","binning_x","binning_y","roi"];
    return memberNames.indexOf(name) !== -1;
  }
}
// Define the wrapper of array class.
class CameraInfoArrayWrapper {
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
      throw new TypeError('Invalid argument: should provide a number to CameraInfoArrayWrapper.size setter');
      return;
    }
    return this._resize(value);
  }
  get capacity() {
    return this._wrappers.length;
  }
  set capacity(value) {
    if (typeof value != 'number') {
      throw new TypeError('Invalid argument: should provide a number to CameraInfoArrayWrapper.capacity setter');
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
    this._refArray = new CameraInfoRefArray(size);
    this._refObject = new CameraInfoRefStructArray();
    this._refObject.size = size;
    this._refObject.capacity = size;
    this._wrappers = new Array();
    for (let i = 0; i < size; i++) {
      this._wrappers.push(new CameraInfoWrapper());
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
    if (! (other instanceof CameraInfoArrayWrapper)) {
      throw new TypeError('Invalid argument: should provide "CameraInfoArrayWrapper".');
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
      CameraInfoWrapper.freeStruct(refObjectArray[index]);
    }
  }
  static get elementType() {
    return CameraInfoWrapper;
  }
  static get isROSArray() {
    return true;
  }
  static get useTypedArray() {
    return false;
  }
  get classType() {
    return CameraInfoArrayWrapper;
  }
}
module.exports = CameraInfoWrapper;
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
      "name": "height",
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
      "name": "width",
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
      "name": "distortion_model",
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
      "name": "d",
      "type": {
        "isArray": true,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": true,
        "isFixedSizeArray": null,
        "pkgName": null,
        "type": "float64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "k",
      "type": {
        "isArray": true,
        "arraySize": 9,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": true,
        "pkgName": null,
        "type": "float64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "r",
      "type": {
        "isArray": true,
        "arraySize": 9,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": true,
        "pkgName": null,
        "type": "float64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "p",
      "type": {
        "isArray": true,
        "arraySize": 12,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": true,
        "pkgName": null,
        "type": "float64",
        "stringUpperBound": null,
        "isPrimitiveType": true
      }
    },
    {
      "name": "binning_x",
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
      "name": "binning_y",
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
      "name": "roi",
      "type": {
        "isArray": false,
        "arraySize": null,
        "isUpperBound": false,
        "isDynamicArray": false,
        "isFixedSizeArray": false,
        "pkgName": "sensor_msgs",
        "type": "RegionOfInterest",
        "stringUpperBound": null,
        "isPrimitiveType": false
      }
    }
  ],
  "baseType": {
    "pkgName": "sensor_msgs",
    "type": "CameraInfo",
    "stringUpperBound": null,
    "isPrimitiveType": false
  },
  "msgName": "CameraInfo"
}
*/
