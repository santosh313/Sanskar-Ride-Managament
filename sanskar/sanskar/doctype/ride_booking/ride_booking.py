# Copyright (c) 2026, santosh sutar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def validate(self):
		total_price=self.price_per_km*self.estimated_km
		service_amount=0
		for i in self.services:
			service_amount=service_amount+i.amount

		self.total_amount=total_price+service_amount

