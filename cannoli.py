import serial

TX = [0x42, 0]
RX = [0x41, 0]
packet = "test"

ser = serial.Serial()
ser.port = "/dev/ttyACM0"
ser.baudrate = 250000
ser.open()

ser.write(TX)
ser.write(RX)

ser.write()