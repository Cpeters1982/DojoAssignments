class Bike(object):
    # self.price
    # self.max_speed
    # self.miles
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print "Price:", self.price
        print "Max speed:", self.max_speed
        print "Miles:", self.miles
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        return self

bike1 = Bike(200, "25mph")
bike2 = Bike(300, "30mph")
bike3 = Bike(400, "20mph")

# bike1.ride()
# bike1.ride()
# bike1.ride()
# bike1.reverse()
# bike1.displayInfo()

bike1.ride().ride().ride().reverse().displayInfo()

# bike2.ride()
# bike2.ride()
# bike2.reverse()
# bike2.reverse()
# bike2.displayInfo()

bike2.ride().ride().reverse().reverse().displayInfo()


# bike3.reverse()
# bike3.reverse()
# bike3.reverse()
# bike3.displayInfo()

bike3.reverse().reverse().reverse().displayInfo()
