class Call(object):
    def __init__(self, unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_phone_number = caller_phone_number
        self.time_of_call = time_of_call
        self.reason_for_call = reason_for_call
    def display_all(self):
        print "Unique ID:", self.unique_id
        print "Caller Name:", self.caller_name
        print "Caller Phone #:", self.caller_phone_number
        print "Time of Call:", self.time_of_call
        print "Reason for Call:", self.reason_for_call
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.queue_size = len(self.calls)
    def add_call(self, call):
        self.calls.append(call)
        self.queue_size = len(self.calls)
        return self
    def remove_call(self):
        self.calls.pop(0)
        return self
    def info(self):
        print "Queue length:", self.queue_size
        for call in self.calls:
            print call.caller_name, call.caller_phone_number
    def remove_call_by_number(self, number):
        for call in self.calls:
            if call.caller_phone_number == number:
                self.calls.remove(call)
                return self
    def sort_calls_by_time(self):
        self.calls = sorted(self.calls, key=lambda call: call.time_of_call)
        return self


call1 = Call(1, "Nick", "312-721-3948", "2:00pm", "stupid stuff")
call2 = Call(2, "Evie", "312-721-4206", "3:00pm", "good question")
call3 = Call(3, "Joe", "847-657-9321", "4:00pm", "problems")
call4 = Call(4, "Bob", "630-670-5259", "1:00pm", "nothin")

center = CallCenter([call1, call2])
center.info()
print ""

center.add_call(call3)
center.add_call(call4)
center.info()
print ""

center.sort_calls_by_time()
center.info()


# center.remove_call()
# center.info()
# print ""
#
# center.remove_call_by_number("847-657-9321")
# center.info()
