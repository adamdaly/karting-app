(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["view-event-create.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section id=\"view-event-create\">\n\t<form action=\"/create-event\" method=\"POST\">\n\t\t<div>\n\t\t\t<label for=\"name\">Name</label>\n\t\t\t<input type=\"text\" name=\"event-name\" id=\"event-name\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"number\">Circuit</label>\n\t\t\t<input type=\"text\" name=\"event-circuit\" id=\"event-circuit\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"number\">Date</label>\n\t\t\t<input type=\"date\" name=\"event-date\" id=\"event-date\">\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t<input type=\"submit\">\n\t\t</div>\n\t</form>\n</section>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["view-index.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section id=\"view-index\">\n\t<h1>App test</h1>\n\t<a href=\"/create-event\" class=\"sub-view\">Create Event</a>\n</section>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["view-user-create.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section id=\"view-user-login\">\n\t<form action=\"/login\" method=\"POST\">\n\t\t<div>\n\t\t\t<label for=\"name\">Username</label>\n\t\t\t<input type=\"text\" name=\"user-name\" id=\"user-name\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"number\">Password</label>\n\t\t\t<input type=\"text\" name=\"user-password\" id=\"user-password\">\n\t\t</div>\t\n\t\t<div>\n\t\t\t<input type=\"submit\">\n\t\t</div>\n\t</form>\n</section>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["view-user-login.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section id=\"view-user-login\">\n\t<form action=\"/login\" method=\"POST\">\n\t\t<div>\n\t\t\t<label for=\"name\">Username</label>\n\t\t\t<input type=\"text\" name=\"user-name\" id=\"user-name\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"number\">Password</label>\n\t\t\t<input type=\"text\" name=\"user-password\" id=\"user-password\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"user-remember\">Remember me</label>\n\t\t\t<input type=\"checkbox\" name=\"user-remember\" id=\"user-remember\">\t\t\n\t\t</div>\n\t\t<div>\n\t\t\t<input type=\"submit\">\n\t\t</div>\n\t</form>\n\t<a href=\"/create-user\" id=\"user-create\">Create User</a>\n</section>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
