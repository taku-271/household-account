import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime","loc":{"start":7,"end":15}},"directives":[],"loc":{"start":0,"end":15}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Expense","loc":{"start":22,"end":29}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":34,"end":36}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":38,"end":41}},"loc":{"start":38,"end":41}},"loc":{"start":38,"end":42}},"directives":[],"loc":{"start":34,"end":42}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":45,"end":50}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":52,"end":58}},"loc":{"start":52,"end":58}},"loc":{"start":52,"end":59}},"directives":[],"loc":{"start":45,"end":59}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"amount","loc":{"start":62,"end":68}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":70,"end":73}},"loc":{"start":70,"end":73}},"loc":{"start":70,"end":74}},"directives":[],"loc":{"start":62,"end":74}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":77,"end":86}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":88,"end":96}},"loc":{"start":88,"end":96}},"loc":{"start":88,"end":97}},"directives":[],"loc":{"start":77,"end":97}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":100,"end":109}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":111,"end":119}},"loc":{"start":111,"end":119}},"loc":{"start":111,"end":120}},"directives":[],"loc":{"start":100,"end":120}}],"loc":{"start":17,"end":122}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"User","loc":{"start":136,"end":140}},"interfaces":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"key","loc":{"start":142,"end":145}},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields","loc":{"start":146,"end":152}},"value":{"kind":"StringValue","value":"id","block":false,"loc":{"start":154,"end":158}},"loc":{"start":146,"end":158}}],"loc":{"start":141,"end":159}}],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":164,"end":166}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":168,"end":171}},"loc":{"start":168,"end":171}},"loc":{"start":168,"end":172}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":174,"end":182}},"arguments":[],"loc":{"start":173,"end":182}}],"loc":{"start":164,"end":182}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":185,"end":189}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":191,"end":197}},"loc":{"start":191,"end":197}},"loc":{"start":191,"end":198}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":200,"end":208}},"arguments":[],"loc":{"start":199,"end":208}}],"loc":{"start":185,"end":208}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":211,"end":216}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":218,"end":224}},"loc":{"start":218,"end":224}},"loc":{"start":218,"end":225}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":227,"end":235}},"arguments":[],"loc":{"start":226,"end":235}}],"loc":{"start":211,"end":235}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"password","loc":{"start":238,"end":246}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":248,"end":254}},"loc":{"start":248,"end":254}},"loc":{"start":248,"end":255}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":257,"end":265}},"arguments":[],"loc":{"start":256,"end":265}}],"loc":{"start":238,"end":265}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isAdmin","loc":{"start":268,"end":275}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":277,"end":284}},"loc":{"start":277,"end":284}},"loc":{"start":277,"end":285}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":287,"end":295}},"arguments":[],"loc":{"start":286,"end":295}}],"loc":{"start":268,"end":295}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":298,"end":307}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":309,"end":317}},"loc":{"start":309,"end":317}},"loc":{"start":309,"end":318}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":320,"end":328}},"arguments":[],"loc":{"start":319,"end":328}}],"loc":{"start":298,"end":328}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":331,"end":340}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":342,"end":350}},"loc":{"start":342,"end":350}},"loc":{"start":342,"end":351}},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"external","loc":{"start":353,"end":361}},"arguments":[],"loc":{"start":352,"end":361}}],"loc":{"start":331,"end":361}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expenses","loc":{"start":364,"end":372}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Expense","loc":{"start":375,"end":382}},"loc":{"start":375,"end":382}},"loc":{"start":374,"end":383}},"loc":{"start":374,"end":384}},"directives":[],"loc":{"start":364,"end":384}}],"loc":{"start":124,"end":386}}],"loc":{"start":0,"end":387}} as unknown as DocumentNode