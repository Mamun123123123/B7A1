Introduction : TypeScript is designed to make JavaScript safer by checking types before code runs. But some types can weaken this safety. One of them is any. On the other hand, unknown is designed to keep safety while still handling unpredictable data.

Why any is called a “type safety hole” : 
The any type completely disables TypeScript type checking. This means you can do anything with it, even unsafe operation.
let data: any = "Hello";
data.toUpperCase();
data.randomMethod(); 

Why unknown is safer:
unknown is safer because you must check the type before using it.
let data: unknown = "Hello";
data.toUpperCase(); 

What is Type Narrowing?
Type narrowing means refining a general type into a specific one using checks like typeof or instanceof.
let data: unknown = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase()); 
}