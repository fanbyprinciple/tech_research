from quickdraw import QuickDrawData, QuickDrawDataGroup
qd = QuickDrawData()
anvil = qd.get_drawing("anvil")

print(anvil)

print(anvil.name)
print(anvil.key_id)
print(anvil.countrycode)
print(anvil.recognized)
print(anvil.timestamp)
print(anvil.no_of_strokes)
print(anvil.image_data)
print(anvil.strokes)

anvil.image.save("my_anvil.gif")

anvils = QuickDrawDataGroup("anvil")
print(anvils.drawing_count)
print(anvils.get_drawing())

qdg = QuickDrawDataGroup("anvil")
for drawing in qdg.drawings:
    print(drawing)