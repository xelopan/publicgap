$(function() {
	$(document).bind("deviceready", function() {
		navigator.notification.alert("Phonegap is ready");
		$("appinfo").first().html('Phonegap (version ' + device.phonegap + ')<br />' + device.platform + ' ' +
			device.name + ' (version ' + device.version + ').');
	});
});