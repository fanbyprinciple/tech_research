import numpy as np
from PIL import Image 

b = np.load('./full_numpy_bitmap_airplane.npy')

print("b is:")
print(b[0])

print(b[0].shape)

height=500
weight=500
channel=3
img_numpy = np.zeros((height, weight, channel), dtype=np.uint8)
img = Image.fromarray(img_numpy, "RGB")

img.show()