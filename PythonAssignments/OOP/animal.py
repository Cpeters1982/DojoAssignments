class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        # self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name:", self.name
        print "Health:", self.health
        return self

animal1 = Animal("Bob")

animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name, 150)
        # self.health = 150
    def pet(self):
        self.health += 5
        return self
dog1 = Dog("Joe")

dog1.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon!"
        super(Dragon, self).displayHealth()

dragon1 = Dragon("Jim")

dragon1.walk().walk().walk().run().run().fly().displayHealth()

#dog1.fly()

#animal2 = Animal("John")

#animal2.displayHealth()
