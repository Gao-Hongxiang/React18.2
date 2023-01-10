// 32是指32个bit,32个0或者1
// 8位指的是8个bit,8个0或者1

//最小值 00000000
//最大值 11111111=2的8次方-1

//真值  8位二进制数能表示的真值范围-2^8 +2^8
// + 00000001 +1
// - 00000001 -1
// -2^8 = - 11111111
// +2^8 = + 11111111


//在计算机中的表示
// 原码
// 因为计算机中只能存0和1，不能存正负号
// 我们可以使用二进制的最高位来表示正负号，0表示正数，1表示负数，用后面的七位来表示真值的绝对值
// 这种编码方式称为原码
// 10000000 -0
// 00000000 +0
// 因为最高位用来表示符号了，所以说原码，8位的只能存的范围 -2^7-+2^7-1,-128~+127
// 01111111=+127
// 11111111=-127
// 00000000=0
// 10000000=-128


//反码
// 反码是另一种数字表示方法
//规则
// 正数的反码和原码是一样的
// 负数的反码将符号位不变，其它位取反
// 反码的表示范围是 -2^7~+2^7-1=> -128~+127

//补码
//补码是为了简化运算，将减法用加法表示
//正数的补码和原码一样
//负数是反码+1
// 8位补码表示范围 -2^7~+2&7-1,也就是-128~+127
//如何快速计算补码
// 由原码低位向高位找到第一个1，1和其低位不变，1前面的高位按位取反就可以了
// 原码  101  -1
// 反码  110  -1
// 补码  111  -1

//原码 10011100
//补码 11100100

//为了简化减法计算
//在JS中任何数字的位运算都会先转成整数
//区分正负号的
//在JS中表示范围是-2^31,+2^31-1

//位操作
//~操作符会将操作数的每一位取反
// ~
//取反得到的数是 -(原数+1)
let a = 0b00000111;//7
console.log(~a);// -8
//11111000

