export default interface Property {
  title: string;
  name: string;
  type: DataType;
  min?: number;
  max?: number;
}

enum DataType {
  Float,
  Integer,
  String,
  Boolean,
}
