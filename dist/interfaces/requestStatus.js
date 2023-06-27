"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStatus = void 0;
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["PENDING"] = 0] = "PENDING";
    RequestStatus[RequestStatus["DECLINED"] = 1] = "DECLINED";
    RequestStatus[RequestStatus["APPROVED"] = 2] = "APPROVED";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
