class Product(object):
    def __init__(self, price, item_name, weight, brand, cost):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
        self.conditon = "new"
    def sell(self):
        self.status = "sold"
        return self
    def add_tax(self, tax):
        return self.price * (1 + tax)
    def return_item(self, reason, condition):
        self.return_reason = reason
        self.condition = condition
        if self.return_reason == "defective":
            self.status = "defective"
            self.price = 0
        elif condition == "open box":
            self.status = "used"
            self.price = self.price * .8
        else:
            self.status = "for sale"
        return self
    def display_info(self):
        print "Price:", self.price
        print "Item Name:", self.item_name
        print "Weight:", self.weight
        print "Brand:", self.brand
        print "Cost:", self.cost
        print "Status:", self.status
        print "Condition:", self.conditon
        return self
        
