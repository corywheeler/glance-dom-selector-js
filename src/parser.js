module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { Start: peg$parseStart },
        peg$startRuleFunction  = peg$parseStart,

        peg$c0 = function(scopes) { return scopes },
        peg$c1 = ">",
        peg$c2 = { type: "literal", value: ">", description: "\">\"" },
        peg$c3 = "^",
        peg$c4 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c5 = ":",
        peg$c6 = { type: "literal", value: ":", description: "\":\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "#",
        peg$c10 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c11 = "\\",
        peg$c12 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c13 = function(targets) {
        	scopeIndex++;
         	scope += text()
            return targets;
         },
        peg$c14 = function(targets) {
         	return targets
         },
        peg$c15 = function(label) {
            return label;
         },
        peg$c16 = function(label, position, properties) {
        	return { label: label.trim(), position: position, properties: properties || [], scope: scope.slice(0,-1), scopeIndex: scopeIndex, path: (scope + text()).trim() }
          },
        peg$c17 = function(chars) { return chars.join('') },
        peg$c18 = function(c) { return c },
        peg$c19 = { type: "any", description: "any character" },
        peg$c20 = /^[ \t\r\n]/,
        peg$c21 = { type: "class", value: "[ \\t\\r\\n]", description: "[ \\t\\r\\n]" },
        peg$c22 = function(c) { return c; },
        peg$c23 = function(position) { return position; },
        peg$c24 = /^[0-9]/,
        peg$c25 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c26 = function() { return parseInt(text(), 10); },
        peg$c27 = function(properties) { return properties; },
        peg$c28 = function(name) { return name.trim() },
        peg$c29 = function(thing) { return thing.join("") },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseStart() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseScope();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseScope();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseScopeChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 62) {
        s0 = peg$c1;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }

      return s0;
    }

    function peg$parseIntersectionChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 94) {
        s0 = peg$c3;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }

      return s0;
    }

    function peg$parsePropertyChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 58) {
        s0 = peg$c5;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }

      return s0;
    }

    function peg$parsePropertySeparator() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 44) {
        s0 = peg$c7;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }

      return s0;
    }

    function peg$parseIndexChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 35) {
        s0 = peg$c9;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }

      return s0;
    }

    function peg$parseEscapeChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 92) {
        s0 = peg$c11;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }

      return s0;
    }

    function peg$parseScope() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseTargets();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseScopeChar();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseTargets() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseTarget();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseTarget();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c14(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseTarget() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseRawLabel();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIntersectionChar();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c15(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseRawLabel() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseLabel();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIndex();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseProperties();
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseWhitespace();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c16(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseLabel() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseLabelCharacter();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseLabelCharacter();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c17(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseLabelCharacter() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseEscapeChar();
      if (s2 === peg$FAILED) {
        s2 = peg$parseScopeChar();
        if (s2 === peg$FAILED) {
          s2 = peg$parseIndexChar();
          if (s2 === peg$FAILED) {
            s2 = peg$parsePropertyChar();
            if (s2 === peg$FAILED) {
              s2 = peg$parseIntersectionChar();
            }
          }
        }
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = void 0;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCharacter();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c18(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseEscapedSequence();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c18(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseCharacter() {
      var s0;

      if (input.length > peg$currPos) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }

      return s0;
    }

    function peg$parseWhitespace() {
      var s0, s1;

      s0 = [];
      if (peg$c20.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c20.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseEscapedSequence() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseEscapeChar();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseEscapeChar();
        if (s2 === peg$FAILED) {
          s2 = peg$parseIndexChar();
          if (s2 === peg$FAILED) {
            s2 = peg$parseScopeChar();
            if (s2 === peg$FAILED) {
              s2 = peg$parsePropertyChar();
              if (s2 === peg$FAILED) {
                s2 = peg$parseIntersectionChar();
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseIndex() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseIndexChar();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePosition();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePosition() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c24.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c24.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c25); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c26();
      }
      s0 = s1;

      return s0;
    }

    function peg$parseProperties() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsePropertyChar();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseProperty();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseProperty();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c27(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseProperty() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsePropertyName();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsePropertySeparator();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c28(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsePropertyName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsePropertyCharacter();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsePropertyCharacter();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c29(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsePropertyCharacter() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parseScopeChar();
      if (s2 === peg$FAILED) {
        s2 = peg$parseIntersectionChar();
        if (s2 === peg$FAILED) {
          s2 = peg$parsePropertySeparator();
        }
      }
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = void 0;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCharacter();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c18(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }


    	var scope = "";
    	var scopeIndex = 0;


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();
