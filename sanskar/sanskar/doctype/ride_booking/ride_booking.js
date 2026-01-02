// Copyright (c) 2026, santosh sutar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {

	},
}); 

frappe.ui.form.on("Ride Add On", {
    service(frm, cdt, cdn) {
        let row = locals[cdt][cdn];

        if (row.service) {
            frappe.call({
                method: "frappe.client.get_value",
                args: {
                    doctype: "Item Price",
                    filters: {
                        item_code: row.service,
                        price_list: "Standard Selling"
                    },
                    fieldname: ["price_list_rate"]
                },
                callback(r) {
                    if (r.message) {
                        row.amount = r.message.price_list_rate || 0;
                    }
                }
            });
        }
    }
});
