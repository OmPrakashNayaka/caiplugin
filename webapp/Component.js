sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("cai_shell_plug.CAI_Shell_Plugin.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			// UIComponent.prototype.init.apply(this, arguments);
			// initialization code of a certain page or component of your web app

			var rendererPromise = this._getRenderer();
			this.renderRecastChatbot();

		},

		renderRecastChatbot: function () {
			
				if (!document.getElementById("cai-webclient-custom")) {
							var e = document.createElement("script");
							e.setAttribute("src", "https://cdn.cai.tools.sap/webclient/bootstrap.js");
							e.setAttribute("id", "cai-webclient-custom");
							document.body.appendChild(e)
						}
						e.setAttribute("data-channel-id", "22a7dea8-cf33-4dc2-8abd-ea96448196a3");
						e.setAttribute("data-token", "f8920791098a35c2e5900b48679a4184");
						e.setAttribute("data-expander-type", "CAI");
						e.setAttribute("data-expander-preferences", "JTdCJTIyZXhwYW5kZXJMb2dvJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZjZG4uY2FpLnRvb2xzLnNhcCUyRndlYmNoYXQlMkZ3ZWJjaGF0LWxvZ28uc3ZnJTIyJTJDJTIyZXhwYW5kZXJUaXRsZSUyMiUzQSUyMkNsaWNrJTIwb24lMjBtZSElMjIlMkMlMjJvbmJvYXJkaW5nTWVzc2FnZSUyMiUzQSUyMkNoYXQlMjB3aXRoJTIwbWUhJTIyJTJDJTIyb3BlbmluZ1R5cGUlMjIlM0ElMjJuZXZlciUyMiUyQyUyMnRoZW1lJTIyJTNBJTIyREVGQVVMVCUyMiU3RA==");
						
						
						
			// if (!document.getElementById("cai-webchat")) {
			// 	var s = document.createElement("script");
			// 	s.setAttribute("id", "cai-webclient-custom");
			// 	s.setAttribute("src", "https://cdn.cai.tools.sap/webclient/bootstrap.js");
			// 	document.body.appendChild(s);
			// }
			// s.setAttribute("data-channelId", "22a7dea8-cf33-4dc2-8abd-ea96448196a3");
			// s.setAttribute("data-token", "f8920791098a35c2e5900b48679a4184");
			// s.setAttribute("data-expander-type", "CAI");
			// s.setAttribute("data-expander-preferences", "JTdCJTIyZXhwYW5kZXJMb2dvJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZjZG4uY2FpLnRvb2xzLnNhcCUyRndlYmNoYXQlMkZ3ZWJjaGF0LWxvZ28uc3ZnJTIyJTJDJTIyZXhwYW5kZXJUaXRsZSUyMiUzQSUyMkNsaWNrJTIwb24lMjBtZSElMjIlMkMlMjJvbmJvYXJkaW5nTWVzc2FnZSUyMiUzQSUyMkNoYXQlMjB3aXRoJTIwbWUhJTIyJTJDJTIyb3BlbmluZ1R5cGUlMjIlM0ElMjJuZXZlciUyMiUyQyUyMnRoZW1lJTIyJTNBJTIyREVGQVVMVCUyMiU3RA==");
		},

		_getRenderer: function () {
			var that = this,
				// @ts-ignore
				oDeferred = new jQuery.Deferred(),
				oRenderer;

			// @ts-ignore
			that._oShellContainer = jQuery.sap.getObject("sap.ushell.Container");
			if (!that._oShellContainer) {
				oDeferred.reject(
					"Illegal State");
			} else {
				oRenderer = that._oShellContainer.getRenderer();
				if (oRenderer) {
					oDeferred.resolve(oRenderer);
				} else {
					that._onRendererCreated = function (oEvent) {
						oRenderer = oEvent.getParameter("renderer");
						if (oRenderer) {
							oDeferred.resolve(oRenderer);
						} else {
							oDeferred.reject("Illegal State");
						}
					};
					that._oShellContainer.attachRendererCreatedEvent(that._onRendererCreated);
				}
			}
			return oDeferred.promise();
		}

	});
});