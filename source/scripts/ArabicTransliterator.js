/* Do not edit, autogenerated by pscript */

var _pyfunc_create_dict = function () {
    var d = {};
    for (var i=0; i<arguments.length; i+=2) { d[arguments[i]] = arguments[i+1]; }
    return d;
};
var _pyfunc_op_add = function (a, b) { // nargs: 2
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
    } return a + b;
};
var _pyfunc_op_contains = function op_contains (a, b) { // nargs: 2
    if (b == null) {
    } else if (Array.isArray(b)) {
        for (var i=0; i<b.length; i++) {if (_pyfunc_op_equals(a, b[i]))
                                           return true;}
        return false;
    } else if (b.constructor === Object) {
        for (var k in b) {if (a == k) return true;}
        return false;
    } else if (b.constructor == String) {
        return b.indexOf(a) >= 0;
    } var e = Error('Not a container: ' + b); e.name='TypeError'; throw e;
};
var _pyfunc_op_equals = function op_equals (a, b) { // nargs: 2
    var a_type = typeof a;
    // If a (or b actually) is of type string, number or boolean, we don't need
    // to do all the other type checking below.
    if (a_type === "string" || a_type === "boolean" || a_type === "number") {
        return a == b;
    }

    if (a == null || b == null) {
    } else if (Array.isArray(a) && Array.isArray(b)) {
        var i = 0, iseq = a.length == b.length;
        while (iseq && i < a.length) {iseq = op_equals(a[i], b[i]); i+=1;}
        return iseq;
    } else if (a.constructor === Object && b.constructor === Object) {
        var akeys = Object.keys(a), bkeys = Object.keys(b);
        akeys.sort(); bkeys.sort();
        var i=0, k, iseq = op_equals(akeys, bkeys);
        while (iseq && i < akeys.length)
            {k=akeys[i]; iseq = op_equals(a[k], b[k]); i+=1;}
        return iseq;
    } return a == b;
};
var _pyfunc_op_instantiate = function (ob, args) { // nargs: 2
    if ((typeof ob === "undefined") ||
            (typeof window !== "undefined" && window === ob) ||
            (typeof global !== "undefined" && global === ob))
            {throw "Class constructor is called as a function.";}
    for (var name in ob) {
        if (Object[name] === undefined &&
            typeof ob[name] === 'function' && !ob[name].nobind) {
            ob[name] = ob[name].bind(ob);
            ob[name].__name__ = name;
        }
    }
    if (ob.__init__) {
        ob.__init__.apply(ob, args);
    }
};
var _pyfunc_truthy = function (v) {
    if (v === null || typeof v !== "object") {return v;}
    else if (v.length !== undefined) {return v.length ? v : false;}
    else if (v.byteLength !== undefined) {return v.byteLength ? v : false;}
    else if (v.constructor !== Object) {return true;}
    else {return Object.getOwnPropertyNames(v).length ? v : false;}
};
var _pymeth_append = function (x) { // nargs: 1
    if (!Array.isArray(this)) return this.append.apply(this, arguments);
    this.push(x);
};
var _pymeth_join = function (x) { // nargs: 1
    if (this.constructor !== String) return this.join.apply(this, arguments);
    return x.join(this);  // call join on the list instead of the string.
};
var _pymeth_replace = function (s1, s2, count) {  // nargs: 2 3
    if (this.constructor !== String) return this.replace.apply(this, arguments);
    var i = 0, i2, parts = [];
    count = (count === undefined) ? 1e20 : count;
    while (count > 0) {
        i2 = this.indexOf(s1, i);
        if (i2 >= 0) {
            parts.push(this.slice(i, i2));
            parts.push(s2);
            i = i2 + s1.length;
            count -= 1;
        } else break;
    }
    parts.push(this.slice(i));
    return parts.join('');
};
var _pymeth_split = function (sep, count) { // nargs: 0, 1 2
    if (this.constructor !== String) return this.split.apply(this, arguments);
    if (sep === '') {var e = Error('empty sep'); e.name='ValueError'; throw e;}
    sep = (sep === undefined) ? /\s/ : sep;
    if (count === undefined) { return this.split(sep); }
    var res = [], i = 0, index1 = 0, index2 = 0;
    while (i < count && index1 < this.length) {
        index2 = this.indexOf(sep, index1);
        if (index2 < 0) { break; }
        res.push(this.slice(index1, index2));
        index1 = index2 + sep.length || 1;
        i += 1;
    }
    res.push(this.slice(index1));
    return res;
};
var _pymeth_startswith = function (x) { // nargs: 1
    if (this.constructor !== String) return this.startswith.apply(this, arguments);
    return this.indexOf(x) == 0;
};
var _pymeth_strip = function (chars) { // nargs: 0 1
    if (this.constructor !== String) return this.strip.apply(this, arguments);
    chars = (chars === undefined) ? ' \t\r\n' : chars;
    var i, s1 = this, s2 = '', s3 = '';
    for (i=0; i<s1.length; i++) {
        if (chars.indexOf(s1[i]) < 0) {s2 = s1.slice(i); break;}
    } for (i=s2.length-1; i>=0; i--) {
        if (chars.indexOf(s2[i]) < 0) {s3 = s2.slice(0, i+1); break;}
    } return s3;
};
var ALA_LC_Transliterator;
// Taken from: https://github.com/MTG/ArabicTransliterator/blob/master/ArabicTransliterator.py
// 
// Transpile to JS:
// ```
// import pscript
// pscript.script2js("ArabicTransliterator.py")
// ```
// 
// Finally append to js: `module.exports = ALA_LC_Transliterator`

ALA_LC_Transliterator = function () {
    // Arabic Transliterator using the American Library Association - Library of Congress (ALA-LC) romanization standard
    _pyfunc_op_instantiate(this, arguments);
}
ALA_LC_Transliterator.prototype._base_class = Object;
ALA_LC_Transliterator.prototype.__name__ = "ALA_LC_Transliterator";

ALA_LC_Transliterator.prototype.__init__ = function () {
    this.invtable = ({});
    this.table = ({});
    this._ALA_LC_Transliterator__load_dictionary();
    return null;
};

ALA_LC_Transliterator.prototype._ALA_LC_Transliterator__load_dictionary = function () {
    var key, stub1_seq, value;
    this.punctuations = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    this.invtable = _pyfunc_create_dict("\u2019", "\u0621", "\u0101", "\u0622", "b", "\u0628", "T", "\u062a", "th", "\u062b", "j", "\u062c", "\u1e25", "\u062d", "kh", "\u062e", "d", "\u062f", "dh", "\u0630", "r", "\u0631", "z", "\u0632", "s", "\u0633", "sh", "\u0634", "\u1e63", "\u0635", "\u1e0d", "\u0636", "\u1e6d", "\u0637", "\u1e93", "\u0638", "\u2018", "\u0639", "gh", "\u063a", "\u2013", "\u0640", "f", "\u0641", "q", "\u0642", "k", "\u0643", "m", "\u0645", "n", "\u0646", "h", "\u0647", "an", "\u064b", "un", "\u064c", "in", "\u064d", "u", "\u064f", "i", "\u0650", "", "\u0652", ".", "\u06d4", ",", "\u060c", "?", "\u061f", ";", "\u061b", "/", "\u060d", "%", "\u066a", "0", "\u0660", "1", "\u0661", "2", "\u0662", "3", "\u0663", "4", "\u0664", "5", "\u0665", "6", "\u0666", "7", "\u0667", "8", "\u0668", "9", "\u0669");
    this.table = ({});
    stub1_seq = this.invtable;
    for (key in stub1_seq) {
        if (!stub1_seq.hasOwnProperty(key)){ continue; }
        value = stub1_seq[key];
        this.table[value] = key;
    }
    return null;
};

ALA_LC_Transliterator.prototype.romanize = function (data) {
    var i, ret_data, stub2_seq, stub3_itr, trans_data, word;
    trans_data = "";
    for (i = 0; i < data.length; i += 1) {
        if (_pyfunc_op_contains(data[i], this.table)) {
            trans_data = _pyfunc_op_add(trans_data, this.table[data[i]]);
        } else if (_pyfunc_op_equals(data[i], "\u0627")) {
            if ((((data.length > (i + 1))) && _pyfunc_op_equals(data[i + 1], "\u0644") && ((_pyfunc_op_equals(i, 0) || ((i > 0) && _pyfunc_op_equals(data[i - 1], " ")))))) {
                trans_data += "a";
            } else if (_pyfunc_op_equals(i, 0)) {
                continue;
            } else if ((((_pyfunc_op_equals(i, 2) && ((_pyfunc_op_contains(data.slice(i - 2,i), ["\u0628\u0650", "\u0644\u0650"]))))) || ((i > 2) && ((_pyfunc_op_contains(data.slice(i - 3,i), [" \u0628\u0650", " \u0644\u0650"])))))) {
                if ((((data.length > (i + 1))) && _pyfunc_op_equals(data[i + 1], "\u0644"))) {
                    trans_data += "-a";
                } else {
                    trans_data += "-";
                }
            } else if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u064e"))) {
                trans_data = trans_data.slice(0,-1) + "\u0101";
            } else if (((i > 1) && _pyfunc_op_equals(data[i - 1], "\u0652") && _pyfunc_op_equals(data[i - 2], "\u0644"))) {
                continue;
            } else if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u064b"))) {
                continue;
            } else {
                trans_data += "\u0101";
            }
        } else if (_pyfunc_op_equals(data[i], "\u064a")) {
            if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u0650"))) {
                if (((i > 1) && _pyfunc_op_contains(data[i - 2], ["\u064e", "\u064f"]))) {
                    trans_data = trans_data.slice(0,-1) + "y";
                } else if ((((data.length > (i + 1))) && _pyfunc_op_contains(data[i + 1], ["\u064e", "\u064f", "\u0650"]))) {
                    trans_data += "y";
                } else {
                    trans_data = trans_data.slice(0,-1) + "\u012b";
                }
            } else if (((i > 0) && ((!_pyfunc_op_contains(data[i - 1], ["\u064e", "\u064f", "\u0627"]))) && ((((((data.length > (i + 1))) && ((!_pyfunc_op_contains(data[i + 1], ["\u064e", "\u064f", "\u0650"]))))) || (data.length == (i + 1)))))) {
                if ((((data.length > (i + 1))) && _pyfunc_op_contains(data[i + 1], "\u0627"))) {
                    trans_data += "y";
                } else {
                    trans_data += "\u012b";
                }
            } else {
                trans_data += "y";
            }
        } else if (_pyfunc_op_equals(data[i], "\u0648")) {
            if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u064f") && ((((data.length == (i + 1))) || (((data.length > (i + 1))) && ((!_pyfunc_op_contains(data[i + 1], ["\u064e", "\u0650"])))))))) {
                trans_data = trans_data.slice(0,-1) + "\u016b";
            } else if (((i > 0) && ((!_pyfunc_op_contains(data[i - 1], ["\u064e", "\u064f", "\u0650", "\u0652", " "]))))) {
                if ((((data.length > (i + 1))) && _pyfunc_op_contains(data[i + 1], ["\u064e", "\u064f", "\u0650"]))) {
                    trans_data += "w";
                } else {
                    trans_data += "\u016b";
                }
            } else {
                trans_data += "w";
            }
        } else if (_pyfunc_op_equals(data[i], "\u0644")) {
            if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u0627"))) {
                if ((_pyfunc_op_equals(i, 1) || ((i > 1) && _pyfunc_op_equals(data[i - 2], " ")))) {
                    trans_data += "l-";
                } else if ((((_pyfunc_op_equals(i, 3) && ((_pyfunc_op_equals(data.slice(i - 3,i), "\u0648\u064e\u0627"))))) || ((i > 3) && ((_pyfunc_op_equals(data.slice(i - 4,i), " \u0648\u064e\u0627")))))) {
                    trans_data += "l-";
                } else if (((trans_data.length > 3) && _pyfunc_op_equals(trans_data[trans_data.length -2], "-"))) {
                    trans_data += "l-";
                } else {
                    trans_data += "l";
                }
            } else {
                trans_data += "l";
            }
        } else if (_pyfunc_op_equals(data[i], "\u0629")) {
            if ((((data.length > (i + 3))) && ((_pyfunc_op_equals(data.slice(i + 1,i + 4), " \u0627\u0644"))))) {
                trans_data += "t";
            } else if ((((data.length > (i + 4))) && _pyfunc_op_contains(data[i + 1], ["\u064e", "\u064f", "\u0650"]) && ((_pyfunc_op_equals(data.slice(i + 2,i + 5), " \u0627\u0644"))))) {
                trans_data += "t";
            } else if ((((data.length > (i + 1))) && _pyfunc_op_contains(data[i + 1], ["\u064b", "\u064c", "\u064d"]))) {
                trans_data += "t";
            } else {
                trans_data += "h";
            }
        } else if (_pyfunc_op_equals(data[i], "\u0649")) {
            if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u064e"))) {
                trans_data = trans_data.slice(0,-1) + "\u00e1";
            } else if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u064b"))) {
                continue;
            } else {
                trans_data += "\u00e1";
            }
        } else if (_pyfunc_op_contains(data[i], ["\u0623", "\u0624", "\u0625", "\u0626"])) {
            if ((_pyfunc_op_equals(i, 0) || (((i > 0) && _pyfunc_op_equals(data[i - 1], " "))) || (((i > 1) && ((_pyfunc_op_equals(data.slice(i - 2,i), "\u0627\u0644"))))) || ((i > 2) && ((_pyfunc_op_equals(data.slice(i - 3,i), "\u0627\u0644\u0652")))))) {
                continue;
            } else {
                trans_data += "\u2019";
            }
        } else if (_pyfunc_op_equals(data[i], "\u064e")) {
            if (((i > 0) && _pyfunc_op_equals(data[i - 1], "\u0627"))) {
                continue;
            } else {
                trans_data += "a";
            }
        } else if (_pyfunc_op_equals(data[i], "\u0651")) {
            if (((i > 0) && ((!_pyfunc_op_contains(data[i - 1], ["\u064a", "\u0648"]))))) {
                if (((i > 2) && ((_pyfunc_op_equals(data.slice(i - 3,i - 1), "\u0627\u0644"))))) {
                    continue;
                } else if (((i > 1) && ((_pyfunc_op_equals(data.slice(i - 2,i), "\u0627\u0644"))))) {
                    trans_data += "l";
                } else if (_pyfunc_op_contains(data[i - 1], this.table)) {
                    trans_data = _pyfunc_op_add(trans_data, this.table[data[i - 1]]);
                } else {
                    trans_data = _pyfunc_op_add(trans_data, trans_data[trans_data.length -1]);
                }
            } else if (((i > 1) && _pyfunc_op_equals(data[i - 1], "\u0648"))) {
                trans_data += "w";
            } else if (((i > 1) && _pyfunc_op_equals(data[i - 1], "\u064a"))) {
                if ((((_pyfunc_op_equals(data[i - 2], "\u0650") && ((data.length == (i + 1))))) || ((((data.length == (i + 2))) && _pyfunc_op_contains(data[i + 1], ["\u064e", "\u064f", "\u0650"]))) || (((data.length > (i + 2))) && _pyfunc_op_equals(data[i + 2], " ")))) {
                    continue;
                } else {
                    trans_data += "y";
                }
            }
        } else {
            trans_data = _pyfunc_op_add(trans_data, data[i]);
        }
    }
    ret_data = [];
    stub2_seq = _pymeth_split.call(_pymeth_strip.call(trans_data), " ");
    if ((typeof stub2_seq === "object") && (!Array.isArray(stub2_seq))) { stub2_seq = Object.keys(stub2_seq);}
    for (stub3_itr = 0; stub3_itr < stub2_seq.length; stub3_itr += 1) {
        word = stub2_seq[stub3_itr];
        if ((word.length > 0)) {
            if (_pyfunc_op_contains(word[word.length -1], ["a", "u", "i"])) {
                word = word.slice(0,-1);
                if (((word.length > 1) && ((_pyfunc_op_equals(word.slice(-2), "iy"))))) {
                    word = word.slice(0,-2) + "\u012b";
                }
            }
            if ((_pymeth_startswith.call(word, (("w" + "\u0101") + "l-")))) {
                word = "wal-" + word.slice(4);
            }
            if (((word.length > 0) && _pyfunc_op_equals(word[word.length -1], "t") && (_pyfunc_truthy(_pymeth_startswith.call(word, "al-") || _pymeth_startswith.call(word, "wal-"))))) {
                word = word.slice(0,-1) + "h";
            }
            word = _pymeth_replace.call(word, "T", "t");
            _pymeth_append.call(ret_data, word);
        }
    }
    return _pymeth_join.call(" ", ret_data);
};

module.exports = ALA_LC_Transliterator
