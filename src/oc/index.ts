function oc(data) {
    return new Proxy((function (defaultValue?) {
        return (data == null ? defaultValue : data);
    }), {
        get: function (target, key) {
            var obj = target();
            return oc(typeof obj === 'object' ? obj[key] : undefined);
        },
    });
}