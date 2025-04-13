sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("dw.ui5.walkthrough.controller.App", {
      onInit() {
        // set data model on view
        const oData = {
          recipient: {
            name: "SAP Fiori 开发之JSON模型初探",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onSayHelloPress: function () {
        // alert("Hello World!");
        MessageToast.show("Hello World!");
      },
    });
  }
);