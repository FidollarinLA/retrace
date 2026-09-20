function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB12MutArrayViewGdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB4JsonE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsbE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsbE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError.prototype.$tag = 6;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 5;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 4;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 3;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 2;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 1;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0TP312FidollarinLA7retrace6engine7Derived(param0, param1, param2, param3) {
  this.name = param0;
  this.op = param1;
  this.left = param2;
  this.right = param3;
}
function _M0TP312FidollarinLA7retrace6engine6Filter(param0, param1, param2) {
  this.column = param0;
  this.op = param1;
  this.value = param2;
}
function _M0TP312FidollarinLA7retrace6engine4Plan(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.title = param0;
  this.metric = param1;
  this.operation = param2;
  this.group_by = param3;
  this.unit = param4;
  this.missing = param5;
  this.filters = param6;
  this.derived = param7;
}
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0TP312FidollarinLA7retrace6engine5Table(param0, param1) {
  this.headers = param0;
  this.rows = param1;
}
function _M0DTPC16result6ResultGbRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB4JsonRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE2Ok.prototype.$tag = 1;
function _M0TP312FidollarinLA7retrace6engine8Evidence(param0, param1, param2, param3, param4, param5, param6) {
  this.id = param0;
  this.group = param1;
  this.value = param2;
  this.count = param3;
  this.row_ids = param4;
  this.excluded_row_ids = param5;
  this.values = param6;
}
function _M0TP312FidollarinLA7retrace6engine6Report(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12) {
  this.engine_version = param0;
  this.schema_version = param1;
  this.title = param2;
  this.metric = param3;
  this.operation = param4;
  this.group_by = param5;
  this.unit = param6;
  this.missing = param7;
  this.source_rows = param8;
  this.matched_rows = param9;
  this.filtered_row_ids = param10;
  this.evidence = param11;
  this.warnings = param12;
}
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGsE, method_1: _M0IPC16string6StringPB4Show10to__string };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 3: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 6: {
      return "FidollarinLA/retrace/engine.InputError.InputError";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 4: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 5: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 2: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6651 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9480GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9481GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9480GcE = 0;
const _M0MPB4Iter4nextN6constrS9481GcE = 0;
const _M0MPB4Iter3newN6constrS9488GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9488GcE = 0;
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS322 = 0n;
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS967 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS968 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS969 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS970 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS971 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS972 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS973 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS974 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS975 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS976 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS977 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS978 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS979 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS980 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS981 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS982 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS983 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS984 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS985 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS986 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS987 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS988 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS989 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS990 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS991 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS992 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS993 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS994 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS995 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS996 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS997 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS998 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS999 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1000 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1001 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1002 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1003 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1004 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1005 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1006 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1007 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1008 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1009 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1010 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1011 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1012 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1013 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1014 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1015 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1016 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1017 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1018 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1019 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1020 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1021 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS967, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS968, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS969, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS970, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS971, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS972, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS973, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS974, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS975, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS976, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS977, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS978, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS979, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS980, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS981, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS982, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS983, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS984, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS985, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS986, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS987, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS988, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS989, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS990, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS991, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS992, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS993, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS994, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS995, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS996, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS997, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS998, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS999, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1000, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1001, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1002, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1003, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1004, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1005, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1006, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1007, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1008, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1009, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1010, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1011, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1012, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1013, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1014, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1015, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1016, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1017, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1018, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1019, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1020, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1021, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1108 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1793 = 0n;
const _M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS315 = "";
const _M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS316 = "";
const _M0FP312FidollarinLA7retrace6engine7matchesN7_2abindS331 = "";
const _M0FP312FidollarinLA7retrace6engine18inspect__csv__jsonN7_2abindS362 = "";
const _M0FP312FidollarinLA7retrace6engine14analyze__tableN7_2abindS383 = "";
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__190S198 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__272S280 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_5466, _x_5467) {
  const _Failure = _x_5466;
  const _$42$arg_5468 = _Failure._0;
  _x_5467.method_table.method_0(_x_5467.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_5467, _$42$arg_5468);
  _x_5467.method_table.method_0(_x_5467.self, ")");
}
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return c1;
  }
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3977(i) {
  if (i < 10) {
    const _p = 48;
    const _p$2 = (i + _p | 0) & 255;
    return _p$2;
  } else {
    const _p = 97;
    const _p$2 = (i + _p | 0) & 255;
    const _p$3 = 10;
    const _p$4 = (_p$2 - _p$3 | 0) & 255;
    return _p$4;
  }
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _p = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3977((b / _p | 0) & 255));
  const _p$2 = 16;
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3977((b % _p$2 | 0) & 255));
  const _p$3 = _self;
  return _p$3.val;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  if (start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0))) {
    return new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0);
  } else {
    return $panic();
  }
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IP016_24default__implPB7Compare6op__ltGkE(x, y) {
  return $compare_int(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return $compare_int(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return $compare_int(x, y) >= 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14json10ParseErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return logger.val;
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9481GUsRPB4JsonEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9480GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9481GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9480GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9488GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9488GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray12view_2einnerGkE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGkE(_bind, start, start + _bind$2 | 0);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView11code__units(self) {
  const _p = self.str.length;
  let _tmp;
  if (_p <= 0) {
    _tmp = [];
  } else {
    const _p$2 = 0;
    const _p$3 = $make_array_len_and_init(_p, self.str.charCodeAt(_p$2));
    let _tmp$2 = 1;
    while (true) {
      const _p$4 = _tmp$2;
      if (_p$4 < _p) {
        $bound_check(_p$3, _p$4);
        _p$3[_p$4] = self.str.charCodeAt(_p$4);
        _tmp$2 = _p$4 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _tmp = _p$3;
  }
  return _M0MPC15array10FixedArray12view_2einnerGkE(_tmp, self.start, self.end);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      const _p = self.charCodeAt(self_off + i | 0);
      const _p$2 = other.charCodeAt(other_off + i | 0);
      if (_p === _p$2) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          $panic();
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return $panic();
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return $panic();
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        if (len === 0 || (total / n | 0) === len) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = self;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return buf.val;
        } else {
          return $panic();
        }
      }
    }
  }
}
function _M0MPC15array5Array4pushGRPB4JsonE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGdEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      const _p = str.charCodeAt(i);
      if (_p === code) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                const _p = self.str.charCodeAt(self.start + i | 0);
                if (_p === high$2) {
                  const _p$2 = self.str.charCodeAt(self.start + (i + 1 | 0) | 0);
                  if (_p$2 === low) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView19trim__start_2einner(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView17trim__end_2einner(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  return _M0MPC16string10StringView17trim__end_2einner(_M0MPC16string10StringView19trim__start_2einner(self, chars), chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6651, 0, _M0MPC16string6String4trimN7_2abindS6651.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return c1;
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter9to__arrayGcE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    result = [];
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGcE(self);
    if (_bind$2 === -1) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGcE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : c;
    }
  } else {
    return -1;
  }
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView12view_2einnerGkE(self, start, end) {
  const len = self.end - self.start | 0;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self.buf;
    const _bind$2 = self.start + start | 0;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGkE(_bind, _bind$2, _bind$2 + _bind$3 | 0);
  } else {
    return $panic();
  }
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array17mut__view_2einnerGdE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB12MutArrayViewGdE(_bind, start, start + _bind$2 | 0);
  } else {
    return $panic();
  }
}
function _M0MPC15array12MutArrayView17mut__view_2einnerGdE(self, start, end) {
  const len = self.end - self.start | 0;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self.buf;
    const _bind$2 = self.start + start | 0;
    const _bind$3 = end$2 - start | 0;
    return new _M0TPB12MutArrayViewGdE(_bind, _bind$2, _bind$2 + _bind$3 | 0);
  } else {
    return $panic();
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB4JsonE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB4JsonE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsbE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsbE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB4JsonE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsbE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB4JsonE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsbE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsbE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsbE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsbE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB4JsonE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB4JsonE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsbE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsbE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB4JsonE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB4JsonE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB4JsonE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB4JsonE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsbE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsbE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsbE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsbE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsbE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsbE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsbE(self, key, value) {
  _M0MPB3Map15set__with__hashGsbE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRPB4JsonE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsbE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsbE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsbE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsbE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPB4JsonE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0IPC14bool4BoolPB6ToJson8to__json(self) {
  if (self) {
    const _p = true;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  } else {
    const _p = false;
    return _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
  }
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  const _p = self + 0;
  const _p$2 = undefined;
  return new _M0DTPB4Json6Number(_p, _p$2);
}
function _M0IPC16double6DoublePB6ToJson8to__json(self) {
  if (self !== self) {
    const _p = "NaN";
    return new _M0DTPB4Json6String(_p);
  } else {
    if (self > $i64_reinterpret_f64(9218868437227405311n)) {
      const _p = "Infinity";
      return new _M0DTPB4Json6String(_p);
    } else {
      if (self < $i64_reinterpret_f64(18442240474082181119n)) {
        const _p = "-Infinity";
        return new _M0DTPB4Json6String(_p);
      } else {
        const _p = undefined;
        return new _M0DTPB4Json6Number(self, _p);
      }
    }
  }
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _p$4;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _M0IPC13int3IntPB6ToJson8to__json(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGRP312FidollarinLA7retrace6engine8EvidenceE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _M0IP312FidollarinLA7retrace6engine8EvidencePB6ToJson8to__json(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = new _M0DTPB4Json6String(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0IPC15array5ArrayPB6ToJson8to__jsonGdE(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _M0IPC16double6DoublePB6ToJson8to__json(_p$4);
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPB4Json5Array(_p);
}
function _M0MPB5Iter24nextGsRPB4JsonE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (55296 <= self$2 && self$2 <= 57343) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return buf.val;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGsE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array4copyGdE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGRPB4JsonE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRPB5ArrayGsEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array12MutArrayView4swapGdE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGdE(arr, start, end) {
  return _M0MPC15array12MutArrayView17mut__view_2einnerGdE(arr, start, end);
}
function _M0MPC15array12MutArrayView14rev__in__placeGdE(arr) {
  const len = arr.end - arr.start | 0;
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGdE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S559GdE(_env, a, b) {
  const arr = _env._1;
  const swaps = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGdE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S563GdE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S559GdE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S559GdE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S559GdE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGdE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    const a = Math.imul(len / 4 | 0, 1) | 0;
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: arr };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S563GdE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S563GdE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S563GdE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S563GdE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGdE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGdE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGdE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGdE(arr) {
  const len = arr.end - arr.start | 0;
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGdE(arr, i);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGdE(arr, 0, i);
      _M0FPB17fixed__sift__downGdE(_M0MPC15array12MutArrayView5sliceGdE(arr, 0, i), 0);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGdE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGdE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGdE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGdE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGdE(arr) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGdE(arr, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGdE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGdE(arr$2);
      return undefined;
    }
    const _bind = _M0FPB20fixed__choose__pivotGdE(arr$2);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGdE(arr$2)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB16fixed__partitionGdE(arr$2, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _p = len - _pivot | 0;
    const balanced$2 = (_pivot > _p ? _p : _pivot) >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2.$tag === 1) {
      const _Some = pred$2;
      const _p$2 = _Some._0;
      if (_p$2 === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$6 = _pivot;
        while (true) {
          const i$2 = _tmp$6;
          if (i$2 < len && _p$2 === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$6 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGdE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGdE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGdE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGdE(left, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]);
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGdE(right, new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]), limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGdE(self) {
  _M0FPB18fixed__quick__sortGdE(self, _M0DTPC16option6OptionGdE4None__, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGdE(self) {
  _M0MPC15array12MutArrayView4sortGdE(_M0MPC15array5Array17mut__view_2einnerGdE(self, 0, undefined));
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE() {
  return new _M0DTPC16result6ResultGRPC16string10StringViewRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp = self;
  let _tmp$2 = init;
  let _tmp$3 = 0;
  while (true) {
    const str = _tmp;
    const ret = _tmp$2;
    const len = _tmp$3;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp = _x$2;
          _tmp$2 = f(_x - 48 | 0, ret);
          _tmp$3 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const s$2 = _tmp;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if ((_bind.end - _bind.start | 0) >= 1) {
        const _x = _bind.str.charCodeAt(_bind.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind.str, _bind.start + 1 | 0, _bind.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind = s$2;
    if ((_bind.end - _bind.start | 0) >= 1) {
      const _x = _bind.str.charCodeAt(_bind.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$2 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS322, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$2._0;
        const _exp_num = _bind$2._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if ((s$2.end - s$2.start | 0) === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$2 = s$3;
  if ((_bind$2.end - _bind$2.start | 0) >= 1) {
    const _x = _bind$2.str.charCodeAt(_bind$2.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$2.str, _bind$2.start + 1 | 0, _bind$2.end);
      s$3 = _x$2;
      const _bind$3 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$3._0;
      const _new_mantissa = _bind$3._1;
      const _consumed_digit = _bind$3._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if ((_bind$3.end - _bind$3.start | 0) >= 1) {
        const _x = _bind$3.str.charCodeAt(_bind$3.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$3.str, _bind$3.start + 1 | 0, _bind$3.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$4;
    if (_bind$3 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number_val = _bind$4._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$3 = s$3;
  if ((_bind$3.end - _bind$3.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp = s;
    while (true) {
      const s$4 = _tmp;
      _L$3: {
        let rest$2;
        let ch;
        _L$4: {
          if ((s$4.end - s$4.start | 0) >= 1) {
            const _x = s$4.str.charCodeAt(s$4.start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s$4.str, s$4.start + 1 | 0, s$4.end);
                rest$2 = _x$2;
                ch = _x;
                break _L$4;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s$4.str, s$4.start + 1 | 0, s$4.end);
                rest$2 = _x$3;
                ch = _x;
                break _L$4;
              }
              default: {
                break _L$3;
              }
            }
          } else {
            break _L$3;
          }
        }
        n_digits = n_digits - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp = rest$2;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$4 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      mantissa$2 = _new_mantissa;
      let _tmp$2;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$2 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$3 = _s$2.str;
          const _bind$5 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$4;
          if (_bind$5 === undefined) {
            _tmp$4 = _s$2.end;
          } else {
            const _Some = _bind$5;
            _tmp$4 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$3, _tmp$4, _s$2.end);
          const _bind$6 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$6._1;
          const _consumed_digit$2 = _bind$6._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$2 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$2));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_263 = 0;
  const _input_end_265 = rest$2.end - rest$2.start | 0;
  const _start_264 = _cursor_263;
  let _accept_state_266 = -1;
  let _match_end_267 = -1;
  let _state_268 = 2;
  while (true) {
    if (_state_268 !== 14) {
      if (_state_268 < 2) {
        _accept_state_266 = _state_268;
        _match_end_267 = _cursor_263;
      }
      const _tmp = Math.imul(_state_268, 8) | 0;
      let _next_char_271;
      if (_cursor_263 < _input_end_265) {
        const _char_270 = rest$2.str.charCodeAt(rest$2.start + _cursor_263 | 0);
        _cursor_263 = _cursor_263 + 1 | 0;
        _next_char_271 = _char_270;
      } else {
        _next_char_271 = -1;
      }
      const _p = _tmp + (_next_char_271 < 90 ? (_next_char_271 < 73 ? (_next_char_271 < 66 ? (_next_char_271 < 0 ? 0 : _next_char_271 > 64 ? 1 : 7) : _next_char_271 > 69 ? (_next_char_271 < 71 ? 2 : 7) : 7) : _next_char_271 > 73 ? (_next_char_271 < 84 ? (_next_char_271 < 78 ? 7 : _next_char_271 > 78 ? 7 : 4) : _next_char_271 > 84 ? (_next_char_271 < 89 ? 7 : 6) : 5) : 3) : _next_char_271 > 96 ? (_next_char_271 < 110 ? (_next_char_271 < 103 ? (_next_char_271 < 98 ? 1 : _next_char_271 > 101 ? 2 : 7) : _next_char_271 > 104 ? (_next_char_271 < 106 ? 3 : 7) : 7) : _next_char_271 > 110 ? (_next_char_271 < 117 ? (_next_char_271 < 116 ? 7 : 5) : _next_char_271 > 120 ? (_next_char_271 < 122 ? 6 : 7) : 7) : 4) : 7) | 0;
      _state_268 = _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__272S280[_p];
      continue;
    } else {
      break;
    }
  }
  const _bind = _accept_state_266;
  switch (_bind) {
    case 0: {
      _cursor_263 = _match_end_267;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_263 = _match_end_267;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_263 = _start_264;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1108;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_181 = 0;
      const _input_end_183 = rest.end - rest.start | 0;
      const _start_182 = _cursor_181;
      let _accept_state_184 = -1;
      let _match_end_185 = -1;
      let _state_186 = 3;
      while (true) {
        if (_state_186 !== 5) {
          if (_state_186 < 3) {
            _accept_state_184 = _state_186;
            _match_end_185 = _cursor_181;
          }
          const _tmp = Math.imul(_state_186, 5) | 0;
          let _next_char_189;
          if (_cursor_181 < _input_end_183) {
            const _char_188 = rest.str.charCodeAt(rest.start + _cursor_181 | 0);
            _cursor_181 = _cursor_181 + 1 | 0;
            _next_char_189 = _char_188;
          } else {
            _next_char_189 = -1;
          }
          const _p = _tmp + (_next_char_189 < 88 ? (_next_char_189 < 66 ? (_next_char_189 < 48 ? 4 : _next_char_189 > 48 ? 4 : 0) : _next_char_189 > 66 ? (_next_char_189 < 79 ? 4 : _next_char_189 > 79 ? 4 : 2) : 1) : _next_char_189 > 88 ? (_next_char_189 < 111 ? (_next_char_189 < 98 ? 4 : _next_char_189 > 98 ? 4 : 1) : _next_char_189 > 111 ? (_next_char_189 < 120 ? 4 : _next_char_189 > 120 ? 4 : 3) : 2) : 3) | 0;
          _state_186 = _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__190S198[_p];
          continue;
        } else {
          break;
        }
      }
      const _bind = _accept_state_184;
      switch (_bind) {
        case 0: {
          _cursor_181 = _match_end_185;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_185, _input_end_183);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_181 = _match_end_185;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_185, _input_end_183);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_181 = _match_end_185;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_185, _input_end_183);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_181 = _start_182;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp = rest$2;
    let _tmp$2 = allow_underscore;
    let _tmp$3 = false;
    while (true) {
      const rest$3 = _tmp;
      const allow_underscore$2 = _tmp$2;
      const follow_underscore = _tmp$3;
      let rest$4;
      _L$2: {
        _L$3: {
          let rest$5;
          _L$4: {
            _L$5: {
              let rest$6;
              _L$6: {
                let rest$7;
                _L$7: {
                  if ((rest$3.end - rest$3.start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest$3.end - rest$3.start | 0) === 1) {
                      const _x = rest$3.str.charCodeAt(rest$3.start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          rest$7 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                            if (hex) {
                              rest$6 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                              if (hex) {
                                rest$6 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                      rest$5 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _tmp$4 = rest$3.str;
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$3.str, 1, rest$3.start, rest$3.end);
                                      let _tmp$5;
                                      if (_bind === undefined) {
                                        _tmp$5 = rest$3.end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$5 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$3.end);
                                      rest$4 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest$3.str.charCodeAt(rest$3.start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          _tmp = _x$2;
                          _tmp$2 = false;
                          _tmp$3 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                          rest$7 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                            if (hex) {
                              rest$6 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                              if (hex) {
                                rest$6 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                  rest$5 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                    rest$5 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                                      rest$5 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _tmp$4 = rest$3.str;
                                      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(rest$3.str, 1, rest$3.start, rest$3.end);
                                      let _tmp$5;
                                      if (_bind === undefined) {
                                        _tmp$5 = rest$3.end;
                                      } else {
                                        const _Some = _bind;
                                        _tmp$5 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(_tmp$4, _tmp$5, rest$3.end);
                                      rest$4 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp = rest$7;
                _tmp$2 = true;
                _tmp$3 = false;
                continue;
              }
              _tmp = rest$6;
              _tmp$2 = true;
              _tmp$3 = false;
              continue;
            }
            return false;
          }
          _tmp = rest$5;
          _tmp$2 = false;
          _tmp$3 = false;
          continue;
        }
        return false;
      }
      _tmp = rest$4;
      _tmp$2 = false;
      _tmp$3 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      const _p = _tmp$2[_tmp$3];
      const _p$2 = 0;
      _tmp = _p === _p$2;
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const rest$3 = _tmp;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp = _x$2;
                continue;
              } else {
                const _bind = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$2 = d.digits;
                  const _tmp$3 = d.digits_num;
                  $bound_check(_tmp$2, _tmp$3);
                  _tmp$2[_tmp$3] = (_x - 48 | 0) & 255;
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const rest$7 = _tmp$2;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$2 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGRPC16string10StringViewE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp = 0n;
  let _tmp$2 = 0;
  while (true) {
    const n = _tmp;
    const i = _tmp$2;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$3 = BigInt.asUintN(64, n * 10n);
      const _tmp$4 = self.digits;
      $bound_check(_tmp$4, i);
      const _p = _tmp$4[i];
      _tmp = BigInt.asUintN(64, _tmp$3 + BigInt.asUintN(64, BigInt(_p)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$3 = n;
      let _tmp$4 = i;
      while (true) {
        const n$3 = _tmp$3;
        const i$2 = _tmp$4;
        if (i$2 < self.decimal_point) {
          _tmp$3 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$4 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  $bound_check(_M0FPC28internal7strconv19left__shift__cheats, s);
  const new_digits = _M0FPC28internal7strconv19left__shift__cheats[s]._0;
  $bound_check(_M0FPC28internal7strconv19left__shift__cheats, s);
  const cheat_num = _M0FPC28internal7strconv19left__shift__cheats[s]._1;
  const _bind = cheat_num.length;
  let less;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const _p = _tmp[_tmp$2];
      const d = BigInt.asUintN(64, BigInt(_p));
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(d)));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = (Number(BigInt.asIntN(32, out)) | 0) & 255;
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = self.decimal_point;
        $bound_check(_M0FPC28internal7strconv6powtab, _p);
        n = _M0FPC28internal7strconv6powtab[_p];
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0FPC28internal7strconv6powtab.length) {
        n = 60;
      } else {
        const _p = -self.decimal_point | 0;
        $bound_check(_M0FPC28internal7strconv6powtab, _p);
        n = _M0FPC28internal7strconv6powtab[_p];
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind = _M0FPC28internal7strconv10range__errGuE();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind = _M0FPC28internal7strconv10range__errGuE();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  const _p = exponent & 31;
  $bound_check(_M0FPC28internal7strconv5table, _p);
  return _M0FPC28internal7strconv5table[_p];
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _tmp = self.mantissa;
      const _p = Number(BigInt.asIntN(32, shift)) | 0;
      $bound_check(_M0FPC28internal7strconv10int__pow10, _p);
      const _bind = _M0FPC28internal7strconv12checked__mul(_tmp, _M0FPC28internal7strconv10int__pow10[_p]);
      let mantissa;
      if (_bind === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind;
        mantissa = _Some;
      }
      if (BigInt.asUintN(64, mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
        return _M0DTPC16option6OptionGdE4None__;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!((str.end - str.start | 0) === 0)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind = _M0FPC28internal7strconv13parse__number(str);
      let _bind$2;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _bind$2 = _ok._0;
      } else {
        return _bind;
      }
      if (_bind$2 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$2;
        const _num = _Some;
        const _bind$3 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$3.$tag === 1) {
          const _Some$2 = _bind$3;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const _bind$4 = _M0FPC28internal7strconv20parse__decimal__priv(str);
          let _tmp;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
          } else {
            return _bind$4;
          }
          return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp);
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind = _M0MPC15array9ArrayView12view_2einnerGkE(_M0MPC16string10StringView11code__units(input), 0, offset);
  const _bind$2 = _bind.end - _bind.start | 0;
  let _tmp = 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp;
    const line = _tmp$2;
    const column = _tmp$3;
    if (_ < _bind$2) {
      const code_unit = _bind.buf[_bind.start + _ | 0];
      const _p = 10;
      if (code_unit === _p) {
        _tmp = _ + 1 | 0;
        _tmp$2 = line + 1 | 0;
        _tmp$3 = 0;
        continue;
      } else {
        _tmp = _ + 1 | 0;
        _tmp$3 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0IPC14json10ParseErrorPB4Show6output(self, logger) {
  switch (self.$tag) {
    case 5: {
      const _InvalidChar = self;
      const _x = _InvalidChar._0;
      const _line = _x.line;
      const _column = _x.column;
      const _c = _InvalidChar._1;
      logger.method_table.method_0(logger.self, "Invalid character ");
      logger.method_table.method_4(logger.self, { self: _M0MPC14char4Char14escape_2einner(_c, true), method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 4: {
      logger.method_table.method_0(logger.self, "Unexpected end of file");
      return;
    }
    case 3: {
      const _InvalidNumber = self;
      const _x$2 = _InvalidNumber._0;
      const _line$2 = _x$2.line;
      const _column$2 = _x$2.column;
      const _s = _InvalidNumber._1;
      logger.method_table.method_0(logger.self, "Invalid number ");
      logger.method_table.method_4(logger.self, { self: _s, method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 2: {
      const _InvalidIdentEscape = self;
      const _x$3 = _InvalidIdentEscape._0;
      const _line$3 = _x$3.line;
      const _column$3 = _x$3.column;
      logger.method_table.method_0(logger.self, "Invalid escape sequence in identifier at line ");
      logger.method_table.method_4(logger.self, { self: _line$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    default: {
      logger.method_table.method_0(logger.self, "Depth limit exceeded, please increase the max_nesting_depth parameter");
      return;
    }
  }
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp;
  let _tmp$2 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$2;
    if (offset >= end) {
      _tmp = offset;
      break;
    }
    _L$2: {
      const _bind = ctx.input;
      const _bind$2 = _bind.str.charCodeAt(_bind.start + offset | 0);
      switch (_bind$2) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp = offset;
          break _L;
        }
      }
    }
    _tmp$2 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1793;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  const _p = exponent & 31;
  $bound_check(_M0FPC14json12pow10__table, _p);
  return _M0FPC14json12pow10__table[_p];
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _tmp = self.mantissa;
    const _p = Number(BigInt.asIntN(32, shift)) | 0;
    $bound_check(_M0FPC14json17int__pow10__table, _p);
    const _bind = _M0FPC14json12checked__mul(_tmp, _M0FPC14json17int__pow10__table[_p]);
    let mantissa;
    if (_bind === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind;
      mantissa = _Some;
    }
    if (BigInt.asUintN(64, mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
      return _M0FPC16double14not__a__number;
    }
    value = $f64_convert_i64_u(BigInt.asUintN(64, mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind = ctx.input;
  const _p = _bind.str.charCodeAt(_bind.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp = number_start;
  let _tmp$2 = 0n;
  while (true) {
    const i = _tmp;
    const acc = _tmp$2;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$2 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$3 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$3, _bind$2);
    }
    const _bind$2 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$2.str.charCodeAt(_bind$2.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$3 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          value = _ok._0;
        } else {
          const _err = _bind$3;
          _try_err = _err._0;
          break _L;
        }
        const _bind$4 = s;
        return new _M0TPC14json11LexedNumber(_bind$4, value);
      }
      let _tmp$3;
      if (negative) {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double13neg__infinity);
      } else {
        const _bind$3 = s;
        _tmp$3 = new _M0TPC14json11LexedNumber(_bind$3, _M0FPC16double8infinity);
      }
      return _tmp$3;
    }
    _tmp = i + 1 | 0;
    _tmp$2 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind = ctx.input;
  const _p = _bind.str.charCodeAt(_bind.start + start | 0);
  const _p$2 = 45;
  const negative = _p === _p$2;
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$2 = negative ? start + 1 | 0 : start;
  let _tmp = _bind$2;
  while (true) {
    const i = _tmp;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$3 = ctx.input;
          const _bind$4 = _bind$3.str.charCodeAt(_bind$3.start + i | 0);
          if (_bind$4 >= 48 && _bind$4 <= 57) {
            const digit = _bind$4 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$4 === 46) {
              has_decimal = true;
            } else {
              if (_bind$4 === 101) {
                break _L$2;
              } else {
                if (_bind$4 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$3 = ctx.input;
          const next = _bind$3.str.charCodeAt(_bind$3.start + (i + 1 | 0) | 0);
          const _p$3 = 45;
          if (next === _p$3) {
            exponent_negative = true;
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = scan.mantissa;
      const signed = scan.negative ? BigInt.asUintN(64, -v) : v;
      const _bind = $f64_convert_i64(BigInt.asIntN(64, signed));
      const _bind$2 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$2, _bind);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!(fast !== fast)) {
    const _bind = undefined;
    return new _M0TPC14json11LexedNumber(_bind, fast);
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      d = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$2, d);
  }
  if (scan.negative) {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double13neg__infinity);
  } else {
    const _bind = s;
    return new _M0TPC14json11LexedNumber(_bind, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind = ctx.input;
    const c1 = _bind.str.charCodeAt(_bind.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$2 = ctx.input;
        const c2 = _bind$2.str.charCodeAt(_bind$2.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x === 46) {
          const _bind$2 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            return _bind$2;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const r = _tmp$3;
    if (_ < n) {
      const _bind = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$2 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                d = _ok._0;
              } else {
                return _bind$2;
              }
            }
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = r << 4 | d;
      continue;
    } else {
      _tmp = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS319(_env, end) {
  const ctx = _env._2;
  const buf = _env._1;
  const start = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView11sub_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: start, _1: buf, _2: ctx };
  _L: while (true) {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS319(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS319(_env, ctx.offset - 1 | 0);
          const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$2 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$2;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const _bind$3 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  c = _ok._0;
                } else {
                  return _bind$3;
                }
                _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                break;
              }
              default: {
                const _bind$4 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(buf.val);
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind = ctx.end_offset;
  let _tmp = string_start;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const _bind$2 = ctx.input;
      const c = _bind$2.str.charCodeAt(_bind$2.start + i | 0);
      const _p = 34;
      if (c === _p) {
        ctx.offset = i + 1 | 0;
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView9to__owned(_M0MPC16string10StringView12view_2einner(ctx.input, string_start, i)));
      } else {
        const _p$2 = 92;
        if (c === _p$2) {
          const _bind$3 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$2;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            _tmp$2 = _ok._0;
          } else {
            return _bind$3;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (_M0IP016_24default__implPB7Compare6op__ltGkE(c, 32)) {
            ctx.offset = i + 1 | 0;
            const _bind$3 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
            const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$3.$tag === 1) {
              const _ok = _bind$3;
              _ok._0;
            } else {
              return _bind$3;
            }
            const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              _ok._0;
            } else {
              return _bind$4;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
              const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _ok._0;
              } else {
                return _bind$3;
              }
              const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _ok._0;
              } else {
                return _bind$4;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$2 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$2.$tag === 1) {
                  const _ok = _bind$2;
                  _ok._0;
                } else {
                  return _bind$2;
                }
                const _bind$3 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _ok._0;
                } else {
                  return _bind$3;
                }
                const _bind$4 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$2 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$2 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$2;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$3 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$4;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        _bind$4 = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      const _n = _bind$4.value;
                      const _repr = _bind$4.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$3 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$4;
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind$4 = _ok._0;
                        } else {
                          return _bind$3;
                        }
                        const _n = _bind$4.value;
                        const _repr = _bind$4.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$2 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$3;
                    if (_bind$2.$tag === 1) {
                      const _ok = _bind$2;
                      _bind$3 = _ok._0;
                    } else {
                      return _bind$2;
                    }
                    const _n = _bind$3.value;
                    const _repr = _bind$3.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$2 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$3;
                      if (_bind$2.$tag === 1) {
                        const _ok = _bind$2;
                        _bind$3 = _ok._0;
                      } else {
                        return _bind$2;
                      }
                      const _n = _bind$3.value;
                      const _repr = _bind$3.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$2.$tag === 1) {
                          const _ok = _bind$2;
                          s = _ok._0;
                        } else {
                          return _bind$2;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const _p = _x;
                        const shift = -(_p <= 65535 ? 1 : 2) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        const _p = true;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 2: {
        const _p$2 = false;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_p$2 ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__);
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6Number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(new _M0DTPB4Json6String(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok($panic());
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp;
  const _bind = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    if (x.$tag === 8) {
      _tmp = new _M0DTPB4Json5Array(vec);
      break;
    } else {
      const _bind$2 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(vec, _tmp$4);
      const _bind$3 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          _tmp = new _M0DTPB4Json5Array(vec);
          break _L;
        }
        default: {
          $panic();
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  let _tmp;
  const _bind$2 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$2;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    _tmp$2 = _ok._0;
  } else {
    return _bind$2;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const x = _tmp$3;
    switch (x.$tag) {
      case 6: {
        _tmp = new _M0DTPB4Json6Object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$3 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _ok._0;
        } else {
          return _bind$3;
        }
        const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$4;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$4 = _ok._0;
        } else {
          return _bind$4;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$4);
        const _bind$5 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$6;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _bind$6 = _ok._0;
        } else {
          return _bind$5;
        }
        switch (_bind$6.$tag) {
          case 9: {
            const _bind$7 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$3 = _ok._0;
            } else {
              return _bind$7;
            }
            continue _L;
          }
          case 6: {
            _tmp = new _M0DTPB4Json6Object(map);
            break _L;
          }
          default: {
            $panic();
          }
        }
        break;
      }
      default: {
        $panic();
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json6escape(str, escape_slash) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(str.length);
  const _bind = str.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = str.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = str.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            const _tmp$2 = _string_index + 2 | 0;
            const _p = (((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          } else {
            const _tmp$2 = _string_index + 1 | 0;
            const _p = _bind$2;
            _decoded_next_string_index = _tmp$2;
            _decoded_char = _p;
            break _L;
          }
        } else {
          const _tmp$2 = _string_index + 1 | 0;
          const _p = _bind$2;
          _decoded_next_string_index = _tmp$2;
          _decoded_char = _p;
          break _L;
        }
      }
      switch (_decoded_char) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        default: {
          const code = _decoded_char;
          if (code === 12) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          } else {
            if (code < 32) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
            } else {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
            }
          }
        }
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return buf.val;
}
function _M0FPC14json11indent__str(level, indent) {
  if (indent === 0) {
    return "";
  } else {
    const spaces = Math.imul(indent, level) | 0;
    switch (spaces) {
      case 0: {
        return "\n";
      }
      case 1: {
        return "\n ";
      }
      case 2: {
        return "\n  ";
      }
      case 3: {
        return "\n   ";
      }
      case 4: {
        return "\n    ";
      }
      case 5: {
        return "\n     ";
      }
      case 6: {
        return "\n      ";
      }
      case 7: {
        return "\n       ";
      }
      case 8: {
        return "\n        ";
      }
      default: {
        return `\n${_M0MPC16string6String6repeat(" ", spaces)}`;
      }
    }
  }
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const stack = [];
  let depth = 0;
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGRPB4JsonE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _tmp = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp = undefined;
            continue;
          } else {
            const _Some = _bind;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$2 = _func(_k, _v);
              if (_bind$2 === undefined) {
                _tmp = undefined;
                continue;
              } else {
                const _Some$3 = _bind$2;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_k, escape_slash));
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_members.size === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_arr.length === 0) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json11indent__str(depth, indent));
            _M0MPC15array5Array4pushGRPB4JsonE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0FPC14json6escape(_s, escape_slash));
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp = undefined;
      continue;
    }
  }
  return buf.val;
}
function _M0IP312FidollarinLA7retrace6engine6ReportPB6ToJson8to__json(_x_195) {
  const _bind = [];
  const $36$map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 0), undefined);
  const _p = _x_195.engine_version;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "engine_version", new _M0DTPB4Json6String(_p));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "schema_version", _M0IPC13int3IntPB6ToJson8to__json(_x_195.schema_version));
  const _p$2 = _x_195.title;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "title", new _M0DTPB4Json6String(_p$2));
  const _p$3 = _x_195.metric;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "metric", new _M0DTPB4Json6String(_p$3));
  const _p$4 = _x_195.operation;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "operation", new _M0DTPB4Json6String(_p$4));
  const _p$5 = _x_195.group_by;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "group_by", new _M0DTPB4Json6String(_p$5));
  const _p$6 = _x_195.unit;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "unit", new _M0DTPB4Json6String(_p$6));
  const _p$7 = _x_195.missing;
  _M0MPB3Map3setGsRPB4JsonE($36$map, "missing", new _M0DTPB4Json6String(_p$7));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "source_rows", _M0IPC13int3IntPB6ToJson8to__json(_x_195.source_rows));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "matched_rows", _M0IPC13int3IntPB6ToJson8to__json(_x_195.matched_rows));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "filtered_row_ids", _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(_x_195.filtered_row_ids));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "evidence", _M0IPC15array5ArrayPB6ToJson8to__jsonGRP312FidollarinLA7retrace6engine8EvidenceE(_x_195.evidence));
  _M0MPB3Map3setGsRPB4JsonE($36$map, "warnings", _M0IPC15array5ArrayPB6ToJson8to__jsonGsE(_x_195.warnings));
  return new _M0DTPB4Json6Object($36$map);
}
function _M0FP312FidollarinLA7retrace6engine6finite(value) {
  return !(value !== value) && !(value > _M0FPB18double__max__value || value < _M0FPB18double__min__value);
}
function _M0FP312FidollarinLA7retrace6engine6number(text, context) {
  let value;
  let _try_err;
  _L: {
    _L$2: {
      const _bind = _M0FPC28internal7strconv13parse__double(_M0MPC16string6String4trim(text, undefined));
      if (_bind.$tag === 1) {
        const _ok = _bind;
        value = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(27);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, context);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": expected a number, got '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, text);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
    return new _M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
  }
  if (!_M0FP312FidollarinLA7retrace6engine6finite(value)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(57);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, context);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": NaN, Infinity and overflowing numbers are not supported");
    return new _M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
  }
  return new _M0DTPC16result6ResultGdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(value);
}
function _M0FP312FidollarinLA7retrace6engine5field(obj, key) {
  if (obj.$tag === 6) {
    const _Object = obj;
    const _fields = _Object._0;
    return _M0MPB3Map3getGsRPB4JsonE(_fields, key);
  } else {
    return undefined;
  }
}
function _M0FP312FidollarinLA7retrace6engine13string__field(obj, key, default_) {
  const _bind = _M0FP312FidollarinLA7retrace6engine5field(obj, key);
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE2Ok(default_);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x.$tag === 4) {
      const _String = _x;
      const _value = _String._0;
      return new _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE2Ok(_value);
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(19);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, key);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "' must be a string");
      return new _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
    }
  }
}
function _M0FP312FidollarinLA7retrace6engine16required__string(obj, key) {
  const _bind = _M0FP312FidollarinLA7retrace6engine13string__field(obj, key, "");
  let value;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    value = _ok._0;
  } else {
    return _bind;
  }
  if (value === "") {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, key);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "' is required");
    return new _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
  }
  return new _M0DTPC16result6ResultGsRP312FidollarinLA7retrace6engine10InputErrorE2Ok(value);
}
function _M0FP312FidollarinLA7retrace6engine11check__keys(obj, allowed, context) {
  if (obj.$tag === 6) {
    const _Object = obj;
    const _fields = _Object._0;
    const _it = _M0MPB3Map5iter2GsRPB4JsonE(_fields);
    while (true) {
      const _bind = _M0MPB5Iter24nextGsRPB4JsonE(_it);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _key = _x._0;
        if (!_M0MPC15array5Array8containsGsE(allowed, _key)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(18);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, context);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": unknown field '");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _key);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
          return new _M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
        }
        continue;
      }
    }
    return new _M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE2Ok(undefined);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(18);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, context);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " must be an object");
    return new _M0DTPC16result6ResultGuRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
  }
}
function _M0FP312FidollarinLA7retrace6engine12array__field(obj, key) {
  const _bind = _M0FP312FidollarinLA7retrace6engine5field(obj, key);
  if (_bind === undefined) {
    return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE2Ok([]);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x.$tag === 5) {
      const _Array = _x;
      const _values = _Array._0;
      return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE2Ok(_values);
    } else {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(19);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, key);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "' must be an array");
      return new _M0DTPC16result6ResultGRPB5ArrayGRPB4JsonERP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
    }
  }
}
function _M0MP312FidollarinLA7retrace6engine10InputError10to__string(self) {
  const _InputError = self;
  return _InputError._0;
}
function _M0IP312FidollarinLA7retrace6engine8EvidencePB6ToJson8to__json(self) {
  const _bind = self.value;
  let value;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _n = _Some._0;
    value = _M0IPC16double6DoublePB6ToJson8to__json(_n);
  } else {
    value = _M0DTPB4Json4Null__;
  }
  const _p = self.id;
  const _tmp = { _0: "id", _1: new _M0DTPB4Json6String(_p) };
  const _p$2 = self.group;
  const _bind$2 = [_tmp, { _0: "group", _1: new _M0DTPB4Json6String(_p$2) }, { _0: "value", _1: value }, { _0: "count", _1: _M0IPC13int3IntPB6ToJson8to__json(self.count) }, { _0: "row_ids", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(self.row_ids) }, { _0: "excluded_row_ids", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGiE(self.excluded_row_ids) }, { _0: "values", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGdE(self.values) }];
  const _p$3 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 7), undefined);
  return new _M0DTPB4Json6Object(_p$3);
}
function _M0FP312FidollarinLA7retrace6engine13column__index(headers, name) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < headers.length) {
      if (_M0MPC15array5Array2atGRPB4JsonE(headers, i) === name) {
        return new _M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE2Ok(i);
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(24);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Column '");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "' does not exist");
  return new _M0DTPC16result6ResultGiRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
}
function _M0FP312FidollarinLA7retrace6engine11parse__plan(json, headers) {
  const _bind = _M0FP312FidollarinLA7retrace6engine11check__keys(json, ["schema_version", "title", "metric", "operation", "group_by", "unit", "missing", "filters", "derived"], "Plan");
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  _L: {
    _L$2: {
      const _bind$2 = _M0FP312FidollarinLA7retrace6engine5field(json, "schema_version");
      if (_bind$2 === undefined) {
        break _L$2;
      } else {
        const _Some = _bind$2;
        const _x = _Some;
        if (_x.$tag === 3) {
          const _Number = _x;
          const _n = _Number._0;
          if (_n === 1) {
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      break _L;
    }
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Plan schema_version must be 1"));
  }
  const _bind$2 = _M0FP312FidollarinLA7retrace6engine13string__field(json, "operation", "mean");
  let operation;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    operation = _ok._0;
  } else {
    return _bind$2;
  }
  if (!_M0MPC15array5Array8containsGsE(["sum", "mean", "min", "max", "count", "median", "stddev"], operation)) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(20);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unknown operation '");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, operation);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
  }
  const _bind$3 = _M0FP312FidollarinLA7retrace6engine13string__field(json, "missing", "error");
  let missing;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    missing = _ok._0;
  } else {
    return _bind$3;
  }
  let _tmp;
  const _p = "error";
  if (!(missing === _p)) {
    const _p$2 = "skip";
    _tmp = !(missing === _p$2);
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("missing must be 'error' or 'skip'"));
  }
  const available = _M0MPC15array5Array4copyGsE(headers);
  const derived = [];
  const _bind$4 = _M0FP312FidollarinLA7retrace6engine12array__field(json, "derived");
  let declarations;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    declarations = _ok._0;
  } else {
    return _bind$4;
  }
  if (declarations.length > 20) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("At most 20 derived columns are supported"));
  }
  const _bind$5 = declarations.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const d = declarations[_];
      const _bind$6 = _M0FP312FidollarinLA7retrace6engine11check__keys(d, ["name", "op", "left", "right"], "Derived column");
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        return _bind$6;
      }
      const _bind$7 = _M0FP312FidollarinLA7retrace6engine16required__string(d, "name");
      let name;
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        name = _ok._0;
      } else {
        return _bind$7;
      }
      if (_M0MPC15array5Array8containsGsE(available, name)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(32);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Derived column '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "' already exists");
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
      }
      const _bind$8 = _M0FP312FidollarinLA7retrace6engine16required__string(d, "op");
      let op;
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        op = _ok._0;
      } else {
        return _bind$8;
      }
      if (!_M0MPC15array5Array8containsGsE(["add", "subtract", "multiply", "divide"], op)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(32);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unsupported derived operation '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, op);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
      }
      const _bind$9 = _M0FP312FidollarinLA7retrace6engine16required__string(d, "left");
      let left;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        left = _ok._0;
      } else {
        return _bind$9;
      }
      const _bind$10 = _M0FP312FidollarinLA7retrace6engine16required__string(d, "right");
      let right;
      if (_bind$10.$tag === 1) {
        const _ok = _bind$10;
        right = _ok._0;
      } else {
        return _bind$10;
      }
      const _bind$11 = _M0FP312FidollarinLA7retrace6engine13column__index(available, left);
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      const _bind$12 = _M0FP312FidollarinLA7retrace6engine13column__index(available, right);
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        _ok._0;
      } else {
        return _bind$12;
      }
      _M0MPC15array5Array4pushGRPB4JsonE(derived, new _M0TP312FidollarinLA7retrace6engine7Derived(name, op, left, right));
      _M0MPC15array5Array4pushGRPB4JsonE(available, name);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = _M0FP312FidollarinLA7retrace6engine16required__string(json, "metric");
  let metric;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    metric = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FP312FidollarinLA7retrace6engine13column__index(available, metric);
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FP312FidollarinLA7retrace6engine13string__field(json, "group_by", "");
  let group_by;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    group_by = _ok._0;
  } else {
    return _bind$8;
  }
  const _p$2 = "";
  if (!(group_by === _p$2)) {
    const _bind$9 = _M0FP312FidollarinLA7retrace6engine13column__index(available, group_by);
    if (_bind$9.$tag === 1) {
      const _ok = _bind$9;
      _ok._0;
    } else {
      return _bind$9;
    }
  }
  const filters = [];
  const _bind$9 = _M0FP312FidollarinLA7retrace6engine12array__field(json, "filters");
  let declarations$2;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    declarations$2 = _ok._0;
  } else {
    return _bind$9;
  }
  if (declarations$2.length > 20) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("At most 20 filters are supported"));
  }
  const _bind$10 = declarations$2.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$10) {
      const f = declarations$2[_];
      const _bind$11 = _M0FP312FidollarinLA7retrace6engine11check__keys(f, ["column", "op", "value"], "Filter");
      if (_bind$11.$tag === 1) {
        const _ok = _bind$11;
        _ok._0;
      } else {
        return _bind$11;
      }
      const _bind$12 = _M0FP312FidollarinLA7retrace6engine16required__string(f, "column");
      let column;
      if (_bind$12.$tag === 1) {
        const _ok = _bind$12;
        column = _ok._0;
      } else {
        return _bind$12;
      }
      const _bind$13 = _M0FP312FidollarinLA7retrace6engine13column__index(available, column);
      if (_bind$13.$tag === 1) {
        const _ok = _bind$13;
        _ok._0;
      } else {
        return _bind$13;
      }
      const _bind$14 = _M0FP312FidollarinLA7retrace6engine16required__string(f, "op");
      let op;
      if (_bind$14.$tag === 1) {
        const _ok = _bind$14;
        op = _ok._0;
      } else {
        return _bind$14;
      }
      if (!_M0MPC15array5Array8containsGsE(["eq", "ne", "gt", "gte", "lt", "lte"], op)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(30);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unsupported filter operator '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, op);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
      }
      let value;
      _L$2: {
        _L$3: {
          const _bind$15 = _M0FP312FidollarinLA7retrace6engine5field(f, "value");
          if (_bind$15 === undefined) {
            break _L$3;
          } else {
            const _Some = _bind$15;
            const _x = _Some;
            switch (_x.$tag) {
              case 4: {
                const _String = _x;
                value = _String._0;
                break;
              }
              case 3: {
                const _Number = _x;
                const _n = _Number._0;
                if (_M0FP312FidollarinLA7retrace6engine6finite(_n)) {
                  value = String(_n);
                } else {
                  break _L$3;
                }
                break;
              }
              default: {
                break _L$3;
              }
            }
          }
          break _L$2;
        }
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Filter value must be a string or finite number"));
      }
      let _tmp$4;
      const _p$3 = "eq";
      if (!(op === _p$3)) {
        const _p$4 = "ne";
        _tmp$4 = !(op === _p$4);
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        const _bind$15 = _M0FP312FidollarinLA7retrace6engine6number(value, "Filter threshold");
        if (_bind$15.$tag === 1) {
          const _ok = _bind$15;
          _ok._0;
        } else {
          return _bind$15;
        }
      }
      _M0MPC15array5Array4pushGRPB4JsonE(filters, new _M0TP312FidollarinLA7retrace6engine6Filter(column, op, value));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$11 = _M0FP312FidollarinLA7retrace6engine13string__field(json, "title", "ReTrace report");
  let _bind$12;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _bind$12 = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$13 = _M0FP312FidollarinLA7retrace6engine13string__field(json, "unit", "");
  let _bind$14;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _bind$14 = _ok._0;
  } else {
    return _bind$13;
  }
  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine4PlanRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0TP312FidollarinLA7retrace6engine4Plan(_bind$12, metric, operation, group_by, _bind$14, missing, filters, derived));
}
function _M0FP312FidollarinLA7retrace6engine13derive__table(table, plan) {
  const headers = _M0MPC15array5Array4copyGsE(table.headers);
  const _p = table.rows;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = _M0MPC15array5Array4copyGsE(_p$5);
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const rows = _p$2;
  const _bind = plan.derived;
  const _bind$2 = _bind.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const d = _bind[_];
      const _bind$3 = _M0FP312FidollarinLA7retrace6engine13column__index(headers, d.left);
      let l;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        l = _ok._0;
      } else {
        return _bind$3;
      }
      const _bind$4 = _M0FP312FidollarinLA7retrace6engine13column__index(headers, d.right);
      let r;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        r = _ok._0;
      } else {
        return _bind$4;
      }
      let _tmp$3 = 0;
      while (true) {
        const i = _tmp$3;
        if (i < rows.length) {
          _L: {
            const row = _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, i);
            if (_M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(_M0MPC15array5Array2atGRPB4JsonE(row, l), undefined), new _M0TPC16string10StringView(_M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS315, 0, _M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS315.length)) || _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(_M0MPC15array5Array2atGRPB4JsonE(row, r), undefined), new _M0TPC16string10StringView(_M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS316, 0, _M0FP312FidollarinLA7retrace6engine13derive__tableN7_2abindS316.length))) {
              _M0MPC15array5Array4pushGRPB4JsonE(row, "");
              break _L;
            }
            const _tmp$4 = _M0MPC15array5Array2atGRPB4JsonE(row, l);
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Record ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, d.left);
            const _bind$5 = _M0FP312FidollarinLA7retrace6engine6number(_tmp$4, _string_builder.val);
            let left;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              left = _ok._0;
            } else {
              return _bind$5;
            }
            const _tmp$5 = _M0MPC15array5Array2atGRPB4JsonE(row, r);
            const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(9);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "Record ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder$2, i + 1 | 0);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, ", ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, d.right);
            const _bind$6 = _M0FP312FidollarinLA7retrace6engine6number(_tmp$5, _string_builder$2.val);
            let right;
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              right = _ok._0;
            } else {
              return _bind$6;
            }
            const _bind$7 = d.op;
            let value;
            switch (_bind$7) {
              case "add": {
                value = left + right;
                break;
              }
              case "subtract": {
                value = left - right;
                break;
              }
              case "multiply": {
                value = left * right;
                break;
              }
              case "divide": {
                if (right === 0) {
                  const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(31);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "Record ");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, i + 1 | 0);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ": division by zero in '");
                  _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, d.name);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "'");
                  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder$3.val));
                }
                value = left / right;
                break;
              }
              default: {
                return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Invalid derived operation"));
              }
            }
            if (!_M0FP312FidollarinLA7retrace6engine6finite(value)) {
              const _string_builder$3 = _M0MPB13StringBuilder21StringBuilder_2einner(34);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "Record ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder$3, i + 1 | 0);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, ": arithmetic overflow in '");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder$3, d.name);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$3, "'");
              return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder$3.val));
            }
            _M0MPC15array5Array4pushGRPB4JsonE(row, String(value));
            break _L;
          }
          _tmp$3 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRPB4JsonE(headers, d.name);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0TP312FidollarinLA7retrace6engine5Table(headers, rows));
}
function _M0FP312FidollarinLA7retrace6engine7matches(row, headers, filters, row_id) {
  let result = true;
  const _bind = filters.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const filter = filters[_];
      const _bind$2 = _M0FP312FidollarinLA7retrace6engine13column__index(headers, filter.column);
      let _tmp$2;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$2 = _ok._0;
      } else {
        return _bind$2;
      }
      const value = _M0MPC15array5Array2atGRPB4JsonE(row, _tmp$2);
      const _bind$3 = filter.op;
      let accepted;
      switch (_bind$3) {
        case "eq": {
          accepted = value === filter.value;
          break;
        }
        case "ne": {
          const _p = filter.value;
          accepted = !(value === _p);
          break;
        }
        default: {
          if (_M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(value, undefined), new _M0TPC16string10StringView(_M0FP312FidollarinLA7retrace6engine7matchesN7_2abindS331, 0, _M0FP312FidollarinLA7retrace6engine7matchesN7_2abindS331.length))) {
            accepted = false;
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(18);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Record ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, row_id);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", filter '");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, filter.column);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
            const _bind$4 = _M0FP312FidollarinLA7retrace6engine6number(value, _string_builder.val);
            let x;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              x = _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = _M0FP312FidollarinLA7retrace6engine6number(filter.value, "Filter threshold");
            let target;
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              target = _ok._0;
            } else {
              return _bind$5;
            }
            const _bind$6 = filter.op;
            switch (_bind$6) {
              case "gt": {
                accepted = x > target;
                break;
              }
              case "gte": {
                accepted = x >= target;
                break;
              }
              case "lt": {
                accepted = x < target;
                break;
              }
              case "lte": {
                accepted = x <= target;
                break;
              }
              default: {
                accepted = false;
              }
            }
          }
        }
      }
      result = result && accepted;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGbRP312FidollarinLA7retrace6engine10InputErrorE2Ok(result);
}
function _M0FP312FidollarinLA7retrace6engine10parse__csv(text) {
  if (text.length > 2000000) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("CSV exceeds the 2,000,000 character limit"));
  }
  const chars = _M0MPB4Iter9to__arrayGcE(_M0MPC16string6String4iter(text));
  const records = [];
  let row = [];
  let buffer = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let quoted = false;
  let closed = false;
  let touched = false;
  let i = chars.length > 0 && _M0MPC15array5Array2atGcE(chars, 0) === 65279 ? 1 : 0;
  while (true) {
    if (i < chars.length) {
      const c = _M0MPC15array5Array2atGcE(chars, i);
      if (quoted) {
        if (c === 34) {
          if ((i + 1 | 0) < chars.length && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 34) {
            _M0IPB13StringBuilderPB6Logger11write__char(buffer, 34);
            i = i + 1 | 0;
          } else {
            quoted = false;
            closed = true;
          }
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buffer, c);
        }
      } else {
        if (c === 44) {
          const _tmp = row;
          const _p = buffer;
          _M0MPC15array5Array4pushGRPB4JsonE(_tmp, _p.val);
          buffer = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          closed = false;
          touched = true;
        } else {
          if (c === 10 || c === 13) {
            if (touched || (row.length > 0 || closed)) {
              const _tmp = row;
              const _p = buffer;
              _M0MPC15array5Array4pushGRPB4JsonE(_tmp, _p.val);
              _M0MPC15array5Array4pushGRPB5ArrayGdEE(records, row);
            }
            row = [];
            buffer = _M0MPB13StringBuilder21StringBuilder_2einner(0);
            closed = false;
            touched = false;
            if (c === 13 && ((i + 1 | 0) < chars.length && _M0MPC15array5Array2atGcE(chars, i + 1 | 0) === 10)) {
              i = i + 1 | 0;
            }
          } else {
            if (closed) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(58);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unexpected character after a closing quote near character ");
              _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
              return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
            } else {
              if (c === 34) {
                const _p = buffer;
                const _p$2 = _p.val;
                const _p$3 = "";
                if (!(_p$2 === _p$3)) {
                  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(50);
                  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Quote inside an unquoted CSV field near character ");
                  _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
                  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
                }
                quoted = true;
                touched = true;
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(buffer, c);
                touched = true;
              }
            }
          }
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (quoted) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Unclosed quoted CSV field"));
  }
  if (touched || (row.length > 0 || closed)) {
    const _tmp = row;
    const _p = buffer;
    _M0MPC15array5Array4pushGRPB4JsonE(_tmp, _p.val);
    _M0MPC15array5Array4pushGRPB5ArrayGdEE(records, row);
  }
  if (records.length < 2) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("CSV must contain a header and at least one data record"));
  }
  if (records.length > 20001) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("CSV exceeds 20,000 data records"));
  }
  const _p = _M0MPC15array5Array2atGRPB5ArrayGsEE(records, 0);
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      _p$2[_p$4] = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_p$5, undefined));
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const headers = _p$2;
  if (headers.length > 100) {
    return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("CSV exceeds 100 columns"));
  }
  const _bind = [];
  const seen = _M0MPB3Map3MapGsbE(new _M0TPB9ArrayViewGUsbEE(_bind, 0, 0), undefined);
  const _bind$2 = headers.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const header = headers[_];
      if (header === "") {
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("CSV column names cannot be empty"));
      }
      if (_M0MPB3Map8containsGsbE(seen, header)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Duplicate CSV column '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, header);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
      }
      _M0MPB3Map3setGsbE(seen, header, true);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const rows = [];
  let _tmp$3 = 1;
  while (true) {
    const r = _tmp$3;
    if (r < records.length) {
      if (_M0MPC15array5Array2atGRPB5ArrayGsEE(records, r).length !== headers.length) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Data record ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, r);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": expected ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, headers.length);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " columns, got ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGRPB5ArrayGsEE(records, r).length);
        return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
      }
      _M0MPC15array5Array4pushGRPB5ArrayGdEE(rows, _M0MPC15array5Array2atGRPB5ArrayGsEE(records, r));
      _tmp$3 = r + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine5TableRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0TP312FidollarinLA7retrace6engine5Table(headers, rows));
}
function _M0FP312FidollarinLA7retrace6engine18inspect__csv__json(text) {
  const _bind = _M0FP312FidollarinLA7retrace6engine10parse__csv(text);
  let table;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    table = _ok._0;
  } else {
    return _bind;
  }
  const columns = [];
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < table.headers.length) {
      let numeric = 0;
      let missing = 0;
      const _bind$2 = table.rows;
      const _bind$3 = _bind$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$3) {
          const row = _bind$2[_];
          if (_M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(_M0MPC15array5Array2atGRPB4JsonE(row, i), undefined), new _M0TPC16string10StringView(_M0FP312FidollarinLA7retrace6engine18inspect__csv__jsonN7_2abindS362, 0, _M0FP312FidollarinLA7retrace6engine18inspect__csv__jsonN7_2abindS362.length))) {
            missing = missing + 1 | 0;
          } else {
            let _try_err;
            _L: {
              _L$2: {
                const _bind$4 = _M0FP312FidollarinLA7retrace6engine6number(_M0MPC15array5Array2atGRPB4JsonE(row, i), "value");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  const _err = _bind$4;
                  _try_err = _err._0;
                  break _L$2;
                }
                numeric = numeric + 1 | 0;
                break _L;
              }
            }
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _p = _M0MPC15array5Array2atGRPB4JsonE(table.headers, i);
      const _bind$4 = [{ _0: "name", _1: new _M0DTPB4Json6String(_p) }, { _0: "numeric", _1: _M0IPC13int3IntPB6ToJson8to__json(numeric) }, { _0: "missing", _1: _M0IPC13int3IntPB6ToJson8to__json(missing) }];
      const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 3), undefined);
      _M0MPC15array5Array4pushGRPB4JsonE(columns, new _M0DTPB4Json6Object(_p$2));
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = [{ _0: "columns", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(columns) }, { _0: "rows", _1: _M0IPC13int3IntPB6ToJson8to__json(table.rows.length) }];
  const _p = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined);
  return new _M0DTPC16result6ResultGRPB4JsonRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0DTPB4Json6Object(_p));
}
function _M0FP312FidollarinLA7retrace6engine11stable__sum(values) {
  let sum = 0;
  let correction = 0;
  const _bind = values.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const value = values[_];
      const next = sum + value;
      if (Math.abs(sum) >= Math.abs(value)) {
        correction = correction + (sum - next + value);
      } else {
        correction = correction + (value - next + sum);
      }
      sum = next;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return sum + correction;
}
function _M0FP312FidollarinLA7retrace6engine9aggregate(values, operation) {
  if (values.length === 0) {
    return new _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(_M0DTPC16option6OptionGdE4None__);
  }
  let result;
  switch (operation) {
    case "count": {
      result = values.length + 0;
      break;
    }
    case "sum": {
      result = _M0FP312FidollarinLA7retrace6engine11stable__sum(values);
      break;
    }
    case "mean": {
      const _p = new Array(values.length);
      const _p$2 = values.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = values[_p$3];
          _p[_p$3] = _p$4 / (values.length + 0);
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      result = _M0FP312FidollarinLA7retrace6engine11stable__sum(_p);
      break;
    }
    case "min": {
      const _p$3 = _M0MPC15array5Array2atGdE(values, 0);
      const _p$4 = values.length;
      let _tmp$2 = 0;
      let _tmp$3 = _p$3;
      while (true) {
        const _p$5 = _tmp$2;
        const _p$6 = _tmp$3;
        if (_p$5 < _p$4) {
          const _p$7 = values[_p$5];
          _tmp$2 = _p$5 + 1 | 0;
          _tmp$3 = _p$6 < _p$7 ? _p$6 : _p$7;
          continue;
        } else {
          result = _p$6;
          break;
        }
      }
      break;
    }
    case "max": {
      const _p$5 = _M0MPC15array5Array2atGdE(values, 0);
      const _p$6 = values.length;
      let _tmp$4 = 0;
      let _tmp$5 = _p$5;
      while (true) {
        const _p$7 = _tmp$4;
        const _p$8 = _tmp$5;
        if (_p$7 < _p$6) {
          const _p$9 = values[_p$7];
          _tmp$4 = _p$7 + 1 | 0;
          _tmp$5 = _p$8 > _p$9 ? _p$8 : _p$9;
          continue;
        } else {
          result = _p$8;
          break;
        }
      }
      break;
    }
    case "median": {
      const sorted = _M0MPC15array5Array4copyGdE(values);
      _M0MPC15array5Array4sortGdE(sorted);
      const middle = sorted.length / 2 | 0;
      result = (sorted.length % 2 | 0) === 1 ? _M0MPC15array5Array2atGdE(sorted, middle) : _M0MPC15array5Array2atGdE(sorted, middle - 1 | 0) / 2 + _M0MPC15array5Array2atGdE(sorted, middle) / 2;
      break;
    }
    case "stddev": {
      if (values.length < 2) {
        return new _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(_M0DTPC16option6OptionGdE4None__);
      }
      const _p$7 = new Array(values.length);
      const _p$8 = values.length;
      let _tmp$6 = 0;
      while (true) {
        const _p$9 = _tmp$6;
        if (_p$9 < _p$8) {
          const _p$10 = values[_p$9];
          _p$7[_p$9] = _p$10 / (values.length + 0);
          _tmp$6 = _p$9 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const mean = _M0FP312FidollarinLA7retrace6engine11stable__sum(_p$7);
      const _p$9 = new Array(values.length);
      const _p$10 = values.length;
      let _tmp$7 = 0;
      while (true) {
        const _p$11 = _tmp$7;
        if (_p$11 < _p$10) {
          const _p$12 = values[_p$11];
          _p$9[_p$11] = (_p$12 - mean) * (_p$12 - mean);
          _tmp$7 = _p$11 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const squares = _p$9;
      result = Math.sqrt(_M0FP312FidollarinLA7retrace6engine11stable__sum(squares) / ((values.length - 1 | 0) + 0));
      break;
    }
    default: {
      return new _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Unknown operation"));
    }
  }
  if (!_M0FP312FidollarinLA7retrace6engine6finite(result)) {
    return new _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Aggregate overflow; rescale the input values"));
  }
  return new _M0DTPC16result6ResultGOdRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0DTPC16option6OptionGdE4Some(result));
}
function _M0FP312FidollarinLA7retrace6engine14analyze__table(csv, plan_json) {
  const _bind = _M0FP312FidollarinLA7retrace6engine10parse__csv(csv);
  let original;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    original = _ok._0;
  } else {
    return _bind;
  }
  const _bind$2 = _M0FP312FidollarinLA7retrace6engine11parse__plan(plan_json, original.headers);
  let plan;
  if (_bind$2.$tag === 1) {
    const _ok = _bind$2;
    plan = _ok._0;
  } else {
    return _bind$2;
  }
  const _bind$3 = _M0FP312FidollarinLA7retrace6engine13derive__table(original, plan);
  let table;
  if (_bind$3.$tag === 1) {
    const _ok = _bind$3;
    table = _ok._0;
  } else {
    return _bind$3;
  }
  const _bind$4 = _M0FP312FidollarinLA7retrace6engine13column__index(table.headers, plan.metric);
  let metric_index;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    metric_index = _ok._0;
  } else {
    return _bind$4;
  }
  let group_index;
  if (plan.group_by === "") {
    group_index = -1;
  } else {
    const _bind$5 = _M0FP312FidollarinLA7retrace6engine13column__index(table.headers, plan.group_by);
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      group_index = _ok._0;
    } else {
      return _bind$5;
    }
  }
  const group_keys = [];
  const _bind$5 = [];
  const group_indexes = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$5, 0, 0), undefined);
  const groups = [];
  const row_ids = [];
  const excluded = [];
  const filtered = [];
  let matched_rows = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < table.rows.length) {
      _L: {
        const row = _M0MPC15array5Array2atGRPB5ArrayGsEE(table.rows, i);
        const _bind$6 = _M0FP312FidollarinLA7retrace6engine7matches(row, table.headers, plan.filters, i + 1 | 0);
        let _tmp$2;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$2 = _ok._0;
        } else {
          return _bind$6;
        }
        if (!_tmp$2) {
          _M0MPC15array5Array4pushGiE(filtered, i + 1 | 0);
          break _L;
        }
        matched_rows = matched_rows + 1 | 0;
        const key = group_index < 0 ? "All" : _M0MPC15array5Array2atGRPB4JsonE(row, group_index);
        const _bind$7 = _M0MPB3Map3getGsiE(group_indexes, key);
        let group;
        if (_bind$7 === undefined) {
          const index = group_keys.length;
          if (index >= 1000) {
            return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("At most 1,000 groups are supported"));
          }
          _M0MPC15array5Array4pushGRPB4JsonE(group_keys, key);
          _M0MPB3Map3setGsiE(group_indexes, key, index);
          _M0MPC15array5Array4pushGRPB5ArrayGdEE(groups, []);
          _M0MPC15array5Array4pushGRPB5ArrayGdEE(row_ids, []);
          _M0MPC15array5Array4pushGRPB5ArrayGdEE(excluded, []);
          group = index;
        } else {
          const _Some = _bind$7;
          group = _Some;
        }
        if (_M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string6String4trim(_M0MPC15array5Array2atGRPB4JsonE(row, metric_index), undefined), new _M0TPC16string10StringView(_M0FP312FidollarinLA7retrace6engine14analyze__tableN7_2abindS383, 0, _M0FP312FidollarinLA7retrace6engine14analyze__tableN7_2abindS383.length))) {
          if (plan.missing === "error") {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(65);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Record ");
            _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": missing '");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, plan.metric);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'; choose missing=skip explicitly to exclude it");
            return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE3Err(new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError(_string_builder.val));
          }
          _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(excluded, group), i + 1 | 0);
        } else {
          const _tmp$3 = _M0MPC15array5Array2atGRPB4JsonE(row, metric_index);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(11);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Record ");
          _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", '");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, plan.metric);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "'");
          const _bind$8 = _M0FP312FidollarinLA7retrace6engine6number(_tmp$3, _string_builder.val);
          let value;
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            value = _ok._0;
          } else {
            return _bind$8;
          }
          _M0MPC15array5Array4pushGdE(_M0MPC15array5Array2atGRPB5ArrayGsEE(groups, group), value);
          _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGRPB5ArrayGsEE(row_ids, group), i + 1 | 0);
        }
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const warnings = [];
  if (matched_rows === 0) {
    _M0MPC15array5Array4pushGRPB4JsonE(warnings, "No rows match the filters; no numeric conclusion can be made.");
  }
  const evidence = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < group_keys.length) {
      const _bind$6 = _M0FP312FidollarinLA7retrace6engine9aggregate(_M0MPC15array5Array2atGRPB5ArrayGsEE(groups, i), plan.operation);
      let value;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        value = _ok._0;
      } else {
        return _bind$6;
      }
      if (_M0MPC15array5Array2atGRPB5ArrayGsEE(excluded, i).length > 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(37);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Group '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGRPB4JsonE(group_keys, i));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': excluded ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MPC15array5Array2atGRPB5ArrayGsEE(excluded, i).length);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " missing value(s).");
        _M0MPC15array5Array4pushGRPB4JsonE(warnings, _string_builder.val);
      }
      if (value.$tag === 0) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Group '");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MPC15array5Array2atGRPB4JsonE(group_keys, i));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "': insufficient data for ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, plan.operation);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ".");
        _M0MPC15array5Array4pushGRPB4JsonE(warnings, _string_builder.val);
      }
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(1);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "e");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, i + 1 | 0);
      _M0MPC15array5Array4pushGRPB4JsonE(evidence, new _M0TP312FidollarinLA7retrace6engine8Evidence(_string_builder.val, _M0MPC15array5Array2atGRPB4JsonE(group_keys, i), value, _M0MPC15array5Array2atGRPB5ArrayGsEE(groups, i).length, _M0MPC15array5Array2atGRPB5ArrayGsEE(row_ids, i), _M0MPC15array5Array2atGRPB5ArrayGsEE(excluded, i), _M0MPC15array5Array2atGRPB5ArrayGsEE(groups, i)));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP312FidollarinLA7retrace6engine6ReportRP312FidollarinLA7retrace6engine10InputErrorE2Ok(new _M0TP312FidollarinLA7retrace6engine6Report("0.1.0", 1, plan.title, plan.metric, plan.operation, plan.group_by, plan.unit, plan.missing, table.rows.length, matched_rows, filtered, evidence, warnings));
}
function _M0FP312FidollarinLA7retrace6engine12verify__json(csv, plan_text, draft_text) {
  let _try_err;
  _L: {
    const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(plan_text, 0, plan_text.length), 1024);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP312FidollarinLA7retrace6engine14analyze__table(csv, _tmp);
    let report;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      report = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _bind$3 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(draft_text, 0, draft_text.length), 1024);
    let draft;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      draft = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _bind$4 = _M0FP312FidollarinLA7retrace6engine11check__keys(draft, ["claims"], "Draft");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const _bind$5 = _M0FP312FidollarinLA7retrace6engine12array__field(draft, "claims");
    let claims;
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      claims = _ok._0;
    } else {
      const _err = _bind$5;
      _try_err = _err._0;
      break _L;
    }
    if (claims.length === 0 || claims.length > 100) {
      _try_err = new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Draft must contain 1–100 claims");
      break _L;
    }
    const checks = [];
    let passed = 0;
    const _bind$6 = claims.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$6) {
        const claim = claims[_];
        const _bind$7 = _M0FP312FidollarinLA7retrace6engine11check__keys(claim, ["evidence_id", "value", "unit", "label"], "Claim");
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _ok._0;
        } else {
          const _err = _bind$7;
          _try_err = _err._0;
          break _L;
        }
        const _bind$8 = _M0FP312FidollarinLA7retrace6engine16required__string(claim, "evidence_id");
        let id;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          id = _ok._0;
        } else {
          const _err = _bind$8;
          _try_err = _err._0;
          break _L;
        }
        let proposed;
        _L$2: {
          _L$3: {
            const _bind$9 = _M0FP312FidollarinLA7retrace6engine5field(claim, "value");
            if (_bind$9 === undefined) {
              break _L$3;
            } else {
              const _Some = _bind$9;
              const _x = _Some;
              if (_x.$tag === 3) {
                const _Number = _x;
                const _n = _Number._0;
                if (_M0FP312FidollarinLA7retrace6engine6finite(_n)) {
                  proposed = _n;
                } else {
                  break _L$3;
                }
              } else {
                break _L$3;
              }
            }
            break _L$2;
          }
          _try_err = new _M0DTPC15error5Error57FidollarinLA_2fretrace_2fengine_2eInputError_2eInputError("Claim value must be a finite number");
          break _L;
        }
        const _bind$9 = _M0FP312FidollarinLA7retrace6engine13string__field(claim, "unit", "");
        let unit;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          unit = _ok._0;
        } else {
          const _err = _bind$9;
          _try_err = _err._0;
          break _L;
        }
        const _bind$10 = _M0FP312FidollarinLA7retrace6engine13string__field(claim, "label", "");
        let label;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          label = _ok._0;
        } else {
          const _err = _bind$10;
          _try_err = _err._0;
          break _L;
        }
        let expected = _M0DTPC16option6OptionGdE4None__;
        let found = false;
        let group = "";
        const _bind$11 = report.evidence;
        const _bind$12 = _bind$11.length;
        let _tmp$3 = 0;
        while (true) {
          const _$2 = _tmp$3;
          if (_$2 < _bind$12) {
            const e = _bind$11[_$2];
            if (e.id === id) {
              found = true;
              expected = e.value;
              group = e.group;
            }
            _tmp$3 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$13 = expected;
        let numeric_ok;
        if (_bind$13.$tag === 1) {
          const _Some = _bind$13;
          const _value = _Some._0;
          numeric_ok = proposed === _value;
        } else {
          numeric_ok = false;
        }
        const accepted = numeric_ok && unit === report.unit;
        if (accepted) {
          passed = passed + 1 | 0;
        }
        let reason;
        if (!found) {
          reason = "Unknown evidence reference";
        } else {
          const _bind$14 = expected;
          if (_bind$14.$tag === 0) {
            reason = "Evidence has no numeric result";
          } else {
            const _p = report.unit;
            if (!(unit === _p)) {
              reason = "Unit mismatch";
            } else {
              reason = !numeric_ok ? "Numeric claim differs from the recomputed result" : "Numeric value, evidence reference and unit match";
            }
          }
        }
        const _bind$14 = expected;
        let expected_json;
        if (_bind$14.$tag === 1) {
          const _Some = _bind$14;
          const _n = _Some._0;
          expected_json = _M0IPC16double6DoublePB6ToJson8to__json(_n);
        } else {
          expected_json = _M0DTPB4Json4Null__;
        }
        const _tmp$4 = { _0: "evidence_id", _1: new _M0DTPB4Json6String(id) };
        const _p = group;
        const _bind$15 = [_tmp$4, { _0: "group", _1: new _M0DTPB4Json6String(_p) }, { _0: "label", _1: new _M0DTPB4Json6String(label) }, { _0: "proposed", _1: _M0IPC16double6DoublePB6ToJson8to__json(proposed) }, { _0: "expected", _1: expected_json }, { _0: "accepted", _1: _M0IPC14bool4BoolPB6ToJson8to__json(accepted) }, { _0: "reason", _1: new _M0DTPB4Json6String(reason) }];
        const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$15, 0, 7), undefined);
        _M0MPC15array5Array4pushGRPB4JsonE(checks, new _M0DTPB4Json6Object(_p$2));
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _p = true;
    const _tmp$3 = { _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ };
    const _tmp$4 = { _0: "passed", _1: _M0IPC13int3IntPB6ToJson8to__json(passed) };
    const _tmp$5 = { _0: "total", _1: _M0IPC13int3IntPB6ToJson8to__json(checks.length) };
    const _tmp$6 = { _0: "all_passed", _1: _M0IPC14bool4BoolPB6ToJson8to__json(passed === checks.length) };
    const _tmp$7 = { _0: "checks", _1: _M0IPC15array5ArrayPB6ToJson8to__jsonGRPB4JsonE(checks) };
    const _p$2 = "Only structured numeric values, evidence references and declared units are checked. Free-form labels and causal statements are not verified.";
    const _bind$7 = [_tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, { _0: "scope", _1: new _M0DTPB4Json6String(_p$2) }];
    const _p$3 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$7, 0, 6), undefined);
    const response = new _M0DTPB4Json6Object(_p$3);
    return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
  }
  const _p = false;
  const _tmp = { _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ };
  const _p$2 = _M0FP15Error10to__string(_try_err);
  const _bind = [_tmp, { _0: "error", _1: new _M0DTPB4Json6String(_p$2) }];
  const _p$3 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined);
  const response = new _M0DTPB4Json6Object(_p$3);
  return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
}
function _M0FP312FidollarinLA7retrace6engine13analyze__json(csv, plan) {
  let _try_err;
  _L: {
    const _bind = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(plan, 0, plan.length), 1024);
    let json;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      json = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0FP312FidollarinLA7retrace6engine14analyze__table(csv, json);
    let report;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      report = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const _p = true;
    const _bind$3 = [{ _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ }, { _0: "report", _1: _M0IP312FidollarinLA7retrace6engine6ReportPB6ToJson8to__json(report) }];
    const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$3, 0, 2), undefined);
    const response = new _M0DTPB4Json6Object(_p$2);
    return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
  }
  const _p = false;
  const _tmp = { _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ };
  const _p$2 = _M0FP15Error10to__string(_try_err);
  const _bind = [_tmp, { _0: "error", _1: new _M0DTPB4Json6String(_p$2) }];
  const _p$3 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined);
  const response = new _M0DTPB4Json6Object(_p$3);
  return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
}
function _M0FP312FidollarinLA7retrace6engine13inspect__json(csv) {
  let _try_err;
  _L: {
    const _bind = _M0FP312FidollarinLA7retrace6engine18inspect__csv__json(csv);
    let info;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      info = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _p = true;
    const _bind$2 = [{ _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ }, { _0: "table", _1: info }];
    const _p$2 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$2, 0, 2), undefined);
    const response = new _M0DTPB4Json6Object(_p$2);
    return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
  }
  const _p = false;
  const _tmp = { _0: "ok", _1: _p ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__ };
  const _p$2 = _M0MP312FidollarinLA7retrace6engine10InputError10to__string(_try_err);
  const _bind = [_tmp, { _0: "error", _1: new _M0DTPB4Json6String(_p$2) }];
  const _p$3 = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind, 0, 2), undefined);
  const response = new _M0DTPB4Json6Object(_p$3);
  return _M0MPC14json4Json17stringify_2einner(response, false, 0, undefined);
}
function _M0FP312FidollarinLA7retrace6bridge7analyze(csv, plan) {
  return _M0FP312FidollarinLA7retrace6engine13analyze__json(csv, plan);
}
function _M0FP312FidollarinLA7retrace6bridge12inspect__csv(csv) {
  return _M0FP312FidollarinLA7retrace6engine13inspect__json(csv);
}
function _M0FP312FidollarinLA7retrace6bridge6verify(csv, plan, draft) {
  return _M0FP312FidollarinLA7retrace6engine12verify__json(csv, plan, draft);
}
export { _M0FP312FidollarinLA7retrace6bridge7analyze as analyze, _M0FP312FidollarinLA7retrace6bridge12inspect__csv as inspect_csv, _M0FP312FidollarinLA7retrace6bridge6verify as verify }
