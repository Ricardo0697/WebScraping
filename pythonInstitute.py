print("Hola!")
print("¡Bienvenido a Fundamentos de Programación en Python!")
print("ESTO ES EL MODO SANDBOX.")
lst = [1,2]
for v in range(2):
    lst.insert(-1 , lst[v])
print(lst)

nums = [1,2,3]
vals = nums

print(vals)
print(nums)
def func1(a):
    return 2;
def func2(a):
    return func1(a) * func1(a)

print(func2(2))

print(1//2 , ' 1//2')

IN = 2


def func(a , b):
    return b ** a
print(func(2 , 2))

z = 0
y = 10
x = y < z and z > y or y >z and z<y
print(x)


# List = [x * x for x in range(5)]
# def fun(listwe):
#     del listwe[listwe[2]]
#     return listwe
# print(fun(list))

f = 1
g = 2
g , f , t = f ,f ,g
t , g, t = f , g , t
print(f,g,t , 'f g t')

a = 1
b = 0
a = a ^ b
b = a ^ b
a = a ^ b

print(a,b)

def funx(x):
    if x % 2 == 0:
        return 1
    else:
        return 2
print(funx(funx(2)) , ' gol')

del vals[:]
print(vals)

x = 3
y = 2

y  = y % x


print(y)

m = 3
n = 6

print(m + n )

print("a" , "b" , "c" , sep="sep")

numsd = 1 // 5 + 1 / 5
print(numsd ,  ' pregunta 18')

# tuple[1] = tuple[1] + tuple[0]

ci = 2.0
cu = 4.0
print(cu ** (1 / ci))

# def funco(c,v):
#     if c == v:
#         return x
#     else:
#         return  funco(x , y-1)
#
# print(funco(0, 3))

# i = 0
# while i < i + 2:
#     i +=1
#     print("*")
# else:
#     print("*")

# nm = input()
# nx = input()
# print(nm + nx) 36

dct = { 'uno':'dos',  'tres':'uno', 'dos':'tres'}
v = dct['tres']

for k in range(len(dct)):
    v = dct[v]

print(v , ' pregunta 21')



