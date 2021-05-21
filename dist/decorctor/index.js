"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function leDecorator(target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling \"" + propertyKey + "\" with", arguments, target);
        var value = oldValue.apply(null, [arguments[1], arguments[0]]);
        console.log("Function is executed");
        return value + "; This is awesome";
    };
    return descriptor;
}
var JSMeetup = /** @class */ (function () {
    function JSMeetup() {
        this.speaker = "Ruban";
    }
    JSMeetup.prototype.welcome = function (arg1, arg2) {
        console.log("Arguments Received are " + arg1 + " " + arg2);
        return arg1 + " " + arg2;
    };
    __decorate([
        leDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], JSMeetup.prototype, "welcome", null);
    return JSMeetup;
}());
var meetup = new JSMeetup();
console.log('222', meetup.welcome("World", "Hello"));
// MethodDecorator = <T>(target: Object, key: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | Void;
