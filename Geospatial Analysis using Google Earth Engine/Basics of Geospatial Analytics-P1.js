//print statements 
print('hello world')

// initalize some variables
var my_name = "HKS"
print(my_name)

var numberofPersons = 5000
print(numberofPersons)

var my_list = [1,'Bond'];
print(my_list)

var my_list = ['James','Bond',1];
print(my_list[1])

var my_dict = {'food': 'bread',
               'color': 'red',
               'number': 'numberofPersons'}
print(my_dict)
print(my_dict['food'])
print(my_dict.color)


///////////////////

var my_func = function(x){
  return (x*100)
}
print(my_func(2))


///////////////////////////
var clientlist = [0,1,2,3,4]
print(clientlist)

var serverlist = ee.List([0,1,2,3,4])
print(serverlist)

clientlist.push(4)
print(clientlist)

var longerlist = serverlist.add(2)
print(longerlist)