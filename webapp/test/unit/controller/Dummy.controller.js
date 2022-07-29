/*global QUnit*/

sap.ui.define([
	"cai_shell_plug/CAI_Shell_Plugin/controller/Dummy.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Dummy Controller");

	QUnit.test("I should test the Dummy controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});