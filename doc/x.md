# 创建一个集合

## 匿名集合
	{ "_schema": "json.object" }

## 简化写法
如果一个对象只有一个属性, 且schema已知, 那么直接用字符串表示

## 数组集合
元素必须是A或B或...

	[A, B ...]

# 实例化

	{ "_schema": "json.object" } -> 
	{ 
		"_schema": "json.object",
		"name": "Jack"
	}


	[A, B] -> [x, y, z]  (x \in A, y \in B)