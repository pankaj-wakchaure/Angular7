"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "id", {
        get: function () {
            console.log(" get Id ", this._id);
            return this._id;
        },
        set: function (id) {
            this._id = id;
            console.log(" set Id ", id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "name", {
        get: function () {
            console.log(" get Name ", this._name);
            return this._name;
        },
        set: function (name) {
            this._name = name;
            console.log(" set Name ", name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "address", {
        get: function () {
            console.log(" get Address ", this._address);
            return this._address;
        },
        set: function (address) {
            this._address = address;
            console.log(" set Address ", address);
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}()); //Company
exports.Company = Company;
